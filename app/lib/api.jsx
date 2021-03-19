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
      id
      content
      order
  }
}
  `;

export const GET_SESSIONS = `
query{
  allSessions{
      id
      content
      order
  }
}
  `;

const fetchStuff = (gqlQuery) => graphql(gqlQuery);

export const useTalents = () => {
  const { isLoading, data, error } = useQuery("talents", () =>
    fetchStuff(GET_TALENTS)
  );

  return {
    isLoading,
    data,
    error,
  };
};
export const useSessions = () => {
  const { isLoading, data, error } = useQuery("sessions", () =>
    fetchStuff(GET_SESSIONS)
  );

  return {
    isLoading,
    data,
    error,
  };
};
