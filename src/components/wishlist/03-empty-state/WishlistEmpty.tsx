"use client";

import React from "react";
import { ArrowRight, LogIn } from "lucide-react";
import { Button } from "@/components/common";
import { useAuth } from "@/lib/AuthContext";
import { useLanguage } from "@/lib/LanguageContext";
import { Cart3D } from "./Cart3D";

export function WishlistEmpty() {
  const { user, loading } = useAuth();
  const { t } = useLanguage();
  const isLoggedIn = !loading && Boolean(user);

  return (
    <section className="px-6 md:px-10 lg:px-[60px] max-w-[1440px] mx-auto pt-4 pb-16 sm:pb-20 text-center">
      <Cart3D />

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111315] font-sans tracking-tight mt-2">
        {t("cart.empty.title", "Your Cart is Empty")}
      </h2>
      <p className="text-[#403C36] font-sans mt-2.5 max-w-md mx-auto leading-relaxed text-sm sm:text-base">
        {isLoggedIn
          ? t("cart.empty.desc_logged_in", "Your cart has no generator sets yet. Head straight to our fleet to add silent DG sets for your project.")
          : t("cart.empty.desc_guest", "Sign in to manage your shortlisted silent DG sets or add generators from our fleet.")}
      </p>

      <div className="mt-7 flex justify-center">
        {isLoggedIn ? (
          <Button href="/generators" variant="primary" size="md">
            {t("cart.empty.btn_explore", "Explore Products")} <ArrowRight className="size-4 ml-2" />
          </Button>
        ) : (
          <Button href="/login?next=/generators" variant="primary" size="md">
            <LogIn className="size-4 mr-2" /> {t("cart.empty.btn_login", "Login")}
          </Button>
        )}
      </div>
    </section>
  );
}
