import { writable } from 'svelte/store'

const ls: Record<string, unknown> = typeof localStorage === 'undefined' ? {} : localStorage

function localStorageStore<T>({ key, initialValue = {} as T }: { key: string; initialValue?: T }) {
	const store = writable<T>(JSON.parse((ls[key] as string) ?? JSON.stringify(initialValue)) as T)
	store.subscribe((value) => {
		ls[key] = JSON.stringify(value)
	})

	return store
}

export { localStorageStore as localStorage }
