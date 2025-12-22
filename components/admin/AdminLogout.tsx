"use client";

import { useLogOut } from "@sanity/sdk-react";
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";

function AdminLogOutButton() {
  const logout = useLogOut();

  const handleLogout = () => {
    logout();
  };

  return (
    <Button type="button" onClick={handleLogout} variant={"link"}>
      <LogOut className="h-4 w-4" />
      Logout
    </Button>
  );
}

export default AdminLogOutButton;
