import { create } from 'zustand'

interface store {}

export const useStore = create<store>(set => ({}))
