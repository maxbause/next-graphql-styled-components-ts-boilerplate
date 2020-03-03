import React from "react"
import JobList from "../components/JobList"
import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"

const Index = () => {
  // our query that defines the attributes we want to get.
  const JOBS_QUERY = gql`
    query {
      jobs {
        id
        title
        applyUrl
        company {
          name
        }
      }
    }
  `

  // the hook that calls the query.
  const jobs = useQuery(JOBS_QUERY)

  return (
    <div>
      <h1>GraphQL Job Board</h1>
      <p>A list of open GraphQL jobs.</p>
      <JobList jobs={jobs?.data?.jobs || []} />
    </div>
  )
}

export default Index



