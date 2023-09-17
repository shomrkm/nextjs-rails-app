"use client";

import { getSession } from "@/services/server/Sessions";
import React from "react";

export const GoogleAuthButton = () => {
  const handleAuthClick = async () => {
    await getSession();
    // 仮のフォームを作成
    const form = document.createElement("form");
    form.method = "POST";
    const baseURL =
      typeof window === "undefined"
        ? process.env.NEXT_SERVER_API_URL
        : process.env.NEXT_PUBLIC_API_URL;
    form.action = `${baseURL}/auth/google_oauth2`;

    const csrfInput = document.createElement("input");
    csrfInput.type = "hidden";
    csrfInput.name = "authenticity_token";

    // CSRFトークンをセット（Railsで生成されたトークンを使用）
    const csrfToken = document.cookie
      ?.split(": ")
      .find((row) => row.startsWith("CSRF-TOKEN="))
      ?.split("=")[1];
    if (!csrfToken) {
      throw Error(
        "Failed to login with google becauce CSRF-TOKEN was not found"
      );
    }

    csrfInput.value = csrfToken;
    form.appendChild(csrfInput);

    // フォームをDOMに追加
    document.body.appendChild(form);

    // フォームを自動的に送信
    form.submit();
  };

  return (
    <button
      className="p-2 border rounded-md bg-blue-200"
      onClick={handleAuthClick}
    >
      Sign in with Google
    </button>
  );
};
