import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

// This file is reserved for backend queries when needed
// Currently, the site is static and doesn't require backend data

export function useExample() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['example'],
    queryFn: async () => {
      if (!actor) return null;
      // Example query - not used in current implementation
      return null;
    },
    enabled: !!actor && !isFetching,
  });
}
