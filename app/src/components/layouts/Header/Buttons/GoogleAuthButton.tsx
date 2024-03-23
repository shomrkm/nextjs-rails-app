"use client";

import { getSession } from "@/services/server/Sessions";
import React from "react";

export const GoogleAuthButton = () => {
  const handleAuthClick = async () => {
    await getSession();

    // axios(ajax) を使って認証リクエストをAPIに送ると、Google認証ページにリダイレクトする際にCORSエラーとなる。
    // そのため、仮のフォームを作成し、form.submit()で送信している。
    const form = document.createElement("form");
    form.method = "POST";
    const baseURL = process.env.NEXT_PUBLIC_API_URL;
    form.action = `${baseURL}/auth/google_oauth2`;

    const csrfInput = document.createElement("input");
    csrfInput.type = "hidden";
    // Rails の ActionController::RequestForgeryProtection では、
    // authenticity_token という名前のパラメータをCSRF TOKEN として探すので、以下のように指定している
    csrfInput.name = "authenticity_token";

    // getSettion()でCookieにセットされた CSRF-TOKEN を取得し、フォームにセットする
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
