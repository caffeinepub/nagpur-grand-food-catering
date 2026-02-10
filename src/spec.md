# Specification

## Summary
**Goal:** Make the application deployable and production-ready for going live by ensuring the backend canister deploys safely and the production frontend loads without missing critical static assets.

**Planned changes:**
- Remove the trap-only backend behavior in `backend/main.mo` so the backend canister builds and deploys successfully without trapping.
- Ensure all static assets referenced by `frontend/src/App.tsx` exist under `frontend/public` with matching filenames/extensions, including setting the uploaded logo as the canonical generated logo file(s) used by the UI.

**User-visible outcome:** The app can be deployed successfully, and the live site loads correctly without broken images for the logo/wordmark/hero visuals.
