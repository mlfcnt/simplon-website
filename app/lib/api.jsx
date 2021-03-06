import { useQuery } from "react-query";

const graphql = (query, variables = {}) =>
  fetch("/admin/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      variables,
      query,
    }),
  }).then(function (result) {
    return result.json();
  });

const GET_PORTFOLIOS = `
query{
  allPortfolios {
    id
		firstName
    lastName
    imageUrl
    formation
    tags {
      name
    }
  }
}
  `;

const GET_CONFIGS = `
  query{
    allConfigs {
      id,
      isActive,
      subTitle
    }
  }
    `;

const fetchStuff = (gqlQuery) => graphql(gqlQuery);

export const usePortfolios = () => {
  const { isLoading, data, error } = useQuery("portfolios", () =>
    fetchStuff(GET_PORTFOLIOS)
  );

  return {
    isLoading,
    data,
    error,
  };
};

export const useConfigs = () => {
  const { isLoading, data, error } = useQuery("configs", () =>
    fetchStuff(GET_CONFIGS)
  );

  return {
    isLoading,
    data,
    error,
  };
};
