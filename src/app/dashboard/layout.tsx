"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/shared/header";
import { OrganizationProfile, OrganizationSwitcher, Protect, useUser } from "@clerk/nextjs";
import HeaderDashboard from "@/components/shared/headerDashboard";

interface ChildrenProps {
  children: React.ReactNode;
}

const LayoutDashboard = ({ children }: ChildrenProps) => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <>
      <HeaderDashboard />
      <main className="w-10/12 flex items-center justify-center h-full">
        <Protect
          role="org:admin"
          fallback={<p>Apenas administradores podem acessar esse conteúdo..</p>}
        >
          {children}
        </Protect>
      </main>
    </>
  );
}

export default LayoutDashboard;

