import { configure } from "@trigger.dev/sdk/v3"

/**
 * Uses Trigger's production environment unless an explicit Trigger preview
 * branch is configured. This prevents the SDK from treating Vercel's main
 * branch as a Trigger preview branch.
 */
export function configureTriggerClient(): void {
  const accessToken = process.env.TRIGGER_SECRET_KEY

  if (!accessToken) return

  configure({
    accessToken,
    baseURL: process.env.TRIGGER_API_URL,
    previewBranch: process.env.TRIGGER_PREVIEW_BRANCH ?? "",
  })
}
