"use client";
import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "tfc-progress";

interface ProgressData {
  endings: Record<string, boolean>;  // ending ID -> seen/unlocked
  characters: Record<string, {
    visited: boolean;
    lastVisit: string;
  }>;
  updatedAt: string;
}

function loadProgress(): ProgressData {
  if (typeof window === "undefined") return { endings: {}, characters: {}, updatedAt: "" };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { endings: {}, characters: {}, updatedAt: "" };
}

function saveProgress(data: ProgressData) {
  data.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>({ endings: {}, characters: {}, updatedAt: "" });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setProgress(loadProgress());
    setReady(true);
  }, []);

  const toggleEnding = useCallback((endingId: string) => {
    setProgress((prev) => {
      const next = { ...prev, endings: { ...prev.endings } };
      if (next.endings[endingId]) {
        delete next.endings[endingId];
      } else {
        next.endings[endingId] = true;
      }
      saveProgress(next);
      return next;
    });
  }, []);

  const markVisited = useCallback((characterSlug: string) => {
    setProgress((prev) => {
      const next = {
        ...prev,
        characters: {
          ...prev.characters,
          [characterSlug]: { visited: true, lastVisit: new Date().toISOString() },
        },
      };
      saveProgress(next);
      return next;
    });
  }, []);

  const getEndingCount = useCallback(
    (endingIds: string[]) => endingIds.filter((id) => progress.endings[id]).length,
    [progress.endings]
  );

  const totalUnlocked = Object.keys(progress.endings).length;
  const charactersVisited = Object.keys(progress.characters).length;

  return {
    progress,
    ready,
    toggleEnding,
    markVisited,
    getEndingCount,
    totalUnlocked,
    charactersVisited,
  };
}
