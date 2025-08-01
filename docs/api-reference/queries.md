---
title: "Queries"
description: "Queries are used to retrieve configs, logs, and workflow info."
---

## List Operations

### listRuns

Returns a paginated list of execution runs.

<Tabs>
  <Tab title="GraphQL">
    ```graphql
    query ListRuns($limit: Int = 10, $offset: Int = 0, $configId: ID) {
      listRuns(limit: $limit, offset: $offset, configId: $configId) {
        items {
          id
          success
          error
          startedAt
          completedAt
          data
          config {
            ... on ApiConfig {
              id
              urlHost
              urlPath
              method
              instruction
              authentication
              createdAt
              updatedAt
            }
            ... on ExtractConfig {
              id
              urlHost
              urlPath
              fileType
              decompressionMethod
              instruction
              authentication
              createdAt
              updatedAt
            }
            ... on TransformConfig {
              id
              instruction
              responseSchema
              responseMapping
              createdAt
              updatedAt
            }
            ... on Workflow {
              id
              version
              instruction
              createdAt
              updatedAt
            }
          }
        }
        total
      }
    }
    ```
  </Tab>
  <Tab title="Client">
    ```typescript
    const { items, total } = await client.listRuns(100, 0);
    ```
  </Tab>
</Tabs>

### listApis

Returns a paginated list of API configurations.

<Tabs>
  <Tab title="GraphQL">
    ```graphql
    query ListApis($limit: Int = 10, $offset: Int = 0) {
      listApis(limit: $limit, offset: $offset) {
        items {
          id
          urlHost
          urlPath
          method
          instruction
          authentication
          createdAt
          updatedAt
        }
        total
      }
    }
    ```
  </Tab>
  <Tab title="Client">
    ```typescript
    const { items, total } = await client.listApis(10, 0);
    ```
  </Tab>
</Tabs>

### listTransforms

Returns a paginated list of transform configurations.

<Tabs>
  <Tab title="GraphQL">
    ```graphql
    query ListTransforms($limit: Int = 10, $offset: Int = 0) {
      listTransforms(limit: $limit, offset: $offset) {
        items {
          id
          instruction
          responseSchema
          responseMapping
          createdAt
          updatedAt
        }
        total
      }
    }
    ```
  </Tab>
  <Tab title="Client">
    ```typescript
    const { items, total } = await client.listTransforms(10, 0);
    ```
  </Tab>
</Tabs>

### listExtracts

Returns a paginated list of extract configurations.

<Tabs>
  <Tab title="GraphQL">
    ```graphql
    query ListExtracts($limit: Int = 10, $offset: Int = 0) {
      listExtracts(limit: $limit, offset: $offset) {
        items {
          id
          urlHost
          urlPath
          fileType
          decompressionMethod
          instruction
          authentication
          createdAt
          updatedAt
        }
        total
      }
    }
    ```
  </Tab>
  <Tab title="Client">
    ```typescript
    const { items, total } = await client.listExtracts(10, 0);
    ```
  </Tab>
</Tabs>

### listWorkflows

Returns a paginated list of workflow configurations.

<Tabs>
  <Tab title="GraphQL">
    ```graphql
    query ListWorkflows($limit: Int = 10, $offset: Int = 0) {
      listWorkflows(limit: $limit, offset: $offset) {
        items {
          id
          version
          createdAt
          updatedAt
          instruction
          steps {
            id
            apiConfig {
              id
              urlHost
              urlPath
              method
              instruction
              authentication
            }
            integrationId
            executionMode
            loopSelector
            loopMaxIters
            inputMapping
            responseMapping
          }
          integrationIds
          finalTransform
          responseSchema
          inputSchema
        }
        total
      }
    }
    ```
  </Tab>
  <Tab title="Client">
    ```typescript
    const { items, total } = await client.listWorkflows(10, 0);
    ```
  </Tab>
</Tabs>

### listIntegrations

Returns a paginated list of integration configurations.

<Tabs>
  <Tab title="GraphQL">
    ```graphql
    query ListIntegrations($limit: Int = 10, $offset: Int = 0) {
      listIntegrations(limit: $limit, offset: $offset) {
        items {
          id
          name
          type
          urlHost
          urlPath
          documentationUrl
          documentation
          documentationPending
          icon
          version
          createdAt
          updatedAt
        }
        total
      }
    }
    ```
  </Tab>
  <Tab title="Client">
    ```typescript
    const { items, total } = await client.listIntegrations(10, 0);
    ```
  </Tab>
</Tabs>

## Get Operations

### getRun

Retrieves a specific execution run by ID.

<Tabs>
  <Tab title="GraphQL">
    ```graphql
    query GetRun($id: ID!) {
      getRun(id: $id) {
        id
        success
        error
        startedAt
        completedAt
        data
        config {
          ... on ApiConfig {
            id
            urlHost
            urlPath
            method
            instruction
            authentication
            createdAt
            updatedAt
          }
          ... on ExtractConfig {
            id
            urlHost
            urlPath
            fileType
            decompressionMethod
            instruction
            authentication
            createdAt
            updatedAt
          }
          ... on TransformConfig {
            id
            instruction
            responseSchema
            responseMapping
            createdAt
            updatedAt
          }
          ... on Workflow {
            id
            version
            instruction
            createdAt
            updatedAt
          }
        }
      }
    }
    ```
  </Tab>
  <Tab title="Client">
    ```typescript
    const run = await client.getRun("run-id");
    ```
  </Tab>
</Tabs>

### getApi

Retrieves a specific API configuration by ID.

<Tabs>
  <Tab title="GraphQL">
    ```graphql
    query GetApi($id: ID!) {
      getApi(id: $id) {
        id
        urlHost
        urlPath
        method
        instruction
        headers
        queryParams
        authentication
        responseSchema
        responseMapping
        pagination {
          type
          pageSize
          cursorPath
        }
        dataPath
        createdAt
        updatedAt
      }
    }
    ```
  </Tab>
  <Tab title="Client">
    ```typescript
    const config = await client.getApi("api-config-id");
    ```
  </Tab>
</Tabs>

### getTransform

Retrieves a specific transform configuration by ID.

<Tabs>
  <Tab title="GraphQL">
    ```graphql
    query GetTransform($id: ID!) {
      getTransform(id: $id) {
        id
        instruction
        responseSchema
        responseMapping
        createdAt
        updatedAt
      }
    }
    ```
  </Tab>
  <Tab title="Client">
    ```typescript
    const config = await client.getTransform("transform-config-id");
    ```
  </Tab>
</Tabs>

### getExtract

Retrieves a specific extract configuration by ID.

<Tabs>
  <Tab title="GraphQL">
    ```graphql
    query GetExtract($id: ID!) {
      getExtract(id: $id) {
        id
        urlHost
        urlPath
        fileType
        decompressionMethod
        instruction
        authentication
        createdAt
        updatedAt
      }
    }
    ```
  </Tab>
  <Tab title="Client">
    ```typescript
    const config = await client.getExtract("extract-config-id");
    ```
  </Tab>
</Tabs>

### getWorkflow

Retrieves a specific workflow configuration by ID.

<Tabs>
  <Tab title="GraphQL">
    ```graphql
    query GetWorkflow($id: ID!) {
      getWorkflow(id: $id) {
        id
        version
        createdAt
        updatedAt
        instruction
        steps {
          id
          apiConfig {
            id
            urlHost
            urlPath
            method
            instruction
            authentication
          }
          integrationId
          executionMode
          loopSelector
          loopMaxIters
          inputMapping
          responseMapping
        }
        integrationIds
        finalTransform
        responseSchema
        inputSchema
      }
    }
    ```
  </Tab>
  <Tab title="Client">
    ```typescript
    const workflow = await client.getWorkflow("workflow-id");
    ```
  </Tab>
</Tabs>

### getIntegration

Retrieves a specific integration configuration by ID.

<Tabs>
  <Tab title="GraphQL">
    ```graphql
    query GetIntegration($id: ID!) {
      getIntegration(id: $id) {
        id
        name
        type
        urlHost
        urlPath
        credentials
        documentationUrl
        documentation
        documentationPending
        icon
        version
        createdAt
        updatedAt
      }
    }
    ```
  </Tab>
  <Tab title="Client">
    ```typescript
    const integration = await client.getIntegration("integration-id");
    ```
  </Tab>
</Tabs>

## Utility Queries

### generateSchema

Generates a JSON schema based on instructions and optional response data.

<Tabs>
  <Tab title="GraphQL">
    ```graphql
    query GenerateSchema($instruction: String!, $responseData: String) {
      generateSchema(instruction: $instruction, responseData: $responseData)
    }
    ```
  </Tab>
  <Tab title="Client">
    ```typescript
    const schema = await client.generateSchema(
      "Get me all characters with only their name",
      '[{"name": "Rick", "species": "Human"}, {"name": "Morty", "species": "Human"}]'
    );
    ```
  </Tab>
</Tabs>

### generateInstructions

Generates natural language instructions based on integration configurations.

<Tabs>
  <Tab title="GraphQL">
    ```graphql
    query GenerateInstructions($integrations: [IntegrationInput!]!) {
      generateInstructions(integrations: $integrations)
    }
    ```
  </Tab>
  <Tab title="Client">
    ```typescript
    const instructions = await client.generateInstructions([
      {
        id: "integration-1",
        name: "GitHub API",
        urlHost: "https://api.github.com",
        documentationUrl: "https://docs.github.com/en/rest"
      }
    ]);
    ```
  </Tab>
</Tabs>

### getTenantInfo

Retrieves tenant account information.

<Tabs>
  <Tab title="GraphQL">
    ```graphql
    query GetTenantInfo {
      getTenantInfo {
        email
        emailEntrySkipped
      }
    }
    ```
  </Tab>
  <Tab title="Client">
    ```typescript
    const tenantInfo = await client.getTenantInfo();
    ```
  </Tab>
</Tabs>

### findRelevantIntegrations

Finds integrations relevant to a given natural language instruction.

<Tabs>
  <Tab title="GraphQL">
    ```graphql
    query FindRelevantIntegrations($instruction: String) {
      findRelevantIntegrations(instruction: $instruction) {
        id
        reason
        savedCredentials
      }
    }
    ```
  </Tab>
  <Tab title="Client">
    ```typescript
    const suggestions = await client.findRelevantIntegrations(
      "I need to send emails and track analytics"
    );
    // Returns integrations like SendGrid, PostHog, etc. with reasons
    ```
  </Tab>
</Tabs>

#### Fields

- `instruction`: String (optional) - Natural language description of what you want to do
- Returns: Array of `SuggestedIntegration` objects