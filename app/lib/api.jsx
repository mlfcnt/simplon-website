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

export const GET_TALENTS = `
query{
  allTalents{
      content
  }
}
  `;

const fetchTalents = () => graphql(GET_TALENTS);

export const useTalents = () => {
  const { isLoading, data, error } = useQuery("talents", fetchTalents);

  return {
    isLoading,
    data,
    error,
  };
};
