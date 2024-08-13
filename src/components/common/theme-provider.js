"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";

export default function ThemeProvider({ children }) {
	return <NextUIProvider>{children}</NextUIProvider>;
}
