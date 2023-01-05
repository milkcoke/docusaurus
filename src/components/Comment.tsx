// src/components/Comment.tsx
import React, { useEffect, useRef } from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function Comment() {
    const containerRef = useRef(null);
    const utterancesRef = useRef(null);

    const { colorMode } = useColorMode();
    const utterancesTheme = colorMode === "dark" ? "github-dark" : "github-light";

    useEffect(() => {
        const createUtterancesEl = () => {
            const script = document.createElement("script");
            script.src = "https://utteranc.es/client.js";
            script.setAttribute("repo", "milkcoke/blog-comments"); // github 계정 이름 / repository 이름
            script.setAttribute("issue-term", "title");
            script.setAttribute("label", "comment");
            script.setAttribute("theme", utterancesTheme);
            script.crossOrigin = "anonymous";
            script.async = true;
            script.onload = () => {
                utterancesRef.current = document.querySelector(".utterances-frame");
            };

            containerRef.current.appendChild(script);
        };
        createUtterancesEl();
    }, []);

    useEffect(() => {
        if (!utterancesRef.current) return;
        const message = {
            type: "set-theme",
            theme: utterancesTheme,
        };

        utterancesRef.current.contentWindow.postMessage(
            message,
            "https://utteranc.es"
        );
    }, [utterancesTheme]);

    return <div ref={containerRef} />;
}
