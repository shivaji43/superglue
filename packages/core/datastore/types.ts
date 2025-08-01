import type { ApiConfig, ExtractConfig, Integration, RunResult, TransformConfig, Workflow } from "@superglue/client";

export interface DataStore {
  // API Config Methods
  getApiConfig(params: { id: string; orgId?: string }): Promise<ApiConfig | null>;
  listApiConfigs(params?: { limit?: number; offset?: number; orgId?: string }): Promise<{ items: ApiConfig[], total: number }>;
  upsertApiConfig(params: { id: string; config: ApiConfig; orgId?: string }): Promise<ApiConfig>;
  deleteApiConfig(params: { id: string; orgId?: string }): Promise<boolean>;

  // Extract Config Methods
  getExtractConfig(params: { id: string; orgId?: string }): Promise<ExtractConfig | null>;
  listExtractConfigs(params?: { limit?: number; offset?: number; orgId?: string }): Promise<{ items: ExtractConfig[], total: number }>;
  upsertExtractConfig(params: { id: string; config: ExtractConfig; orgId?: string }): Promise<ExtractConfig>;
  deleteExtractConfig(params: { id: string; orgId?: string }): Promise<boolean>;

  // Transform Config Methods
  getTransformConfig(params: { id: string; orgId?: string }): Promise<TransformConfig | null>;
  listTransformConfigs(params?: { limit?: number; offset?: number; orgId?: string }): Promise<{ items: TransformConfig[], total: number }>;
  upsertTransformConfig(params: { id: string; config: TransformConfig; orgId?: string }): Promise<TransformConfig>;
  deleteTransformConfig(params: { id: string; orgId?: string }): Promise<boolean>;

  // Run Result Methods
  getRun(params: { id: string; orgId?: string }): Promise<RunResult | null>;
  listRuns(params?: { limit?: number; offset?: number; configId?: string; orgId?: string }): Promise<{ items: RunResult[], total: number }>;
  createRun(params: { result: RunResult; orgId?: string }): Promise<RunResult>;
  deleteRun(params: { id: string; orgId?: string }): Promise<boolean>;
  deleteAllRuns(params?: { orgId?: string }): Promise<boolean>;

  // Workflow Methods
  getWorkflow(params: { id: string; orgId?: string }): Promise<Workflow | null>;
  listWorkflows(params?: { limit?: number; offset?: number; orgId?: string }): Promise<{ items: Workflow[], total: number }>;
  upsertWorkflow(params: { id: string; workflow: Workflow; orgId?: string }): Promise<Workflow>;
  deleteWorkflow(params: { id: string; orgId?: string }): Promise<boolean>;
  getManyWorkflows(params: { ids: string[]; orgId?: string }): Promise<Workflow[]>;

  // Tenant Information Methods
  getTenantInfo(): Promise<{ email: string | null, emailEntrySkipped: boolean }>;
  setTenantInfo(params?: { email?: string; emailEntrySkipped?: boolean }): Promise<void>;

  // Integration Methods
  getIntegration(params: { id: string; includeDocs?: boolean; orgId?: string }): Promise<Integration | null>;
  listIntegrations(params?: { limit?: number; offset?: number; includeDocs?: boolean; orgId?: string }): Promise<{ items: Integration[], total: number }>;
  upsertIntegration(params: { id: string; integration: Integration; orgId?: string }): Promise<Integration>;
  deleteIntegration(params: { id: string; orgId?: string }): Promise<boolean>;
  getManyIntegrations(params: { ids: string[]; includeDocs?: boolean; orgId?: string }): Promise<Integration[]>;
}
