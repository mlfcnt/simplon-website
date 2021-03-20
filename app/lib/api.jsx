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
    tags {
      name
    }
  }
}
  `;

const GET_EVENTS = `
query{
  allEvents {
    id
    type
    name
    dateFrom
    dateTo
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

export const useEvents = () => {
  const { isLoading, data, error } = useQuery("events", () =>
    fetchStuff(GET_EVENTS)
  );

  return {
    isLoading,
    data,
    error,
  };
};
