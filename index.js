const { Keystone } = require("@keystonejs/keystone");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const {
  Text,
  Checkbox,
  Password,
  Integer,
  Relationship,
  CalendarDay,
} = require("@keystonejs/fields");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const initialiseData = require("./initial-data");
const { NextApp } = require("@keystonejs/app-next");
require("dotenv").config();
const { Markdown } = require("@keystonejs/fields-markdown");

const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
const adapterConfig = {
  mongoUri: process.env.MONGO_URI,
};

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  onConnect: process.env.CREATE_TABLES !== "true" && initialiseData,
  cookie: {
    secure: process.env.NODE_ENV === "production",
  },
  cookieSecret: process.env.COOKIE_SECRET,
});

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) =>
  Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }

  // Instead of a boolean, you can return a GraphQL query:
  // https://www.keystonejs.com/api/access-control#graphqlwhere
  return { id: user.id };
};

const userIsAdminOrOwner = (auth) => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};

const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

keystone.createList("User", {
  fields: {
    name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    isAdmin: {
      type: Checkbox,
      // Field-level access controls
      // Here, we set more restrictive field access so a non-admin cannot make themselves admin.
      access: {
        update: access.userIsAdmin,
      },
    },
    password: {
      type: Password,
    },
  },
  // List-level access controls
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});

keystone.createList("Actu", {
  fields: {
    content: {
      type: Markdown,
      isRequired: true,
    },
    order: {
      type: Integer,
    },
  },
  access: {
    update: access.userIsAdmin,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});

keystone.createList("Tag", {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
  },
  access: {
    update: access.userIsAdmin,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});

keystone.createList("Event", {
  fields: {
    type: {
      type: Text,
      defaultValue: "Stage",
    },
    name: {
      type: Text,
    },
    dateFrom: {
      type: CalendarDay,
    },
    dateTo: {
      type: CalendarDay,
    },
  },
});

keystone.createList("Portfolio", {
  fields: {
    firstName: {
      type: Text,
      isRequired: true,
    },
    lastName: {
      type: Text,
      isRequired: true,
    },
    email: {
      type: Text,
    },
    imageUrl: {
      type: Text,
    },
    tags: {
      type: Relationship,
      ref: "Tag",
      many: true,
    },
  },
  access: {
    update: access.userIsAdmin,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User",
  config: { protectIdentities: process.env.NODE_ENV === "production" },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: "Simplon Website",
      adminPath: "/admin",
      authStrategy,
    }),
    new NextApp({ dir: "app" }),
  ],
  distDir: "dist",
  configureExpress: (app) => {
    app.set("trust proxy", 1);
  },
};
