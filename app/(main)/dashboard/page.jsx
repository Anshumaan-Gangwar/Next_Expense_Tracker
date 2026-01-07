import { getUserAccount } from "@/actions/dashboard";
import {CreateAccountDrawer} from "@/components/createAccountDrawer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Plus } from "lucide-react";
import AccountCard from "./_components/accountCard";

export default async function DashboardPage() {
  const accounts = await getUserAccount()
  // console.log(accounts)
  return (
    // <createAccountDrawer/>
    <div>
        dashboard page
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CreateAccountDrawer>
          <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
            <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
              <Plus className="h-10 w-10 mb-2" />
              <p className="text-sm font-medium">Add New Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>
        {accounts.length > 0 && accounts?.map((account) => {
          return <AccountCard key={account.id} account={account}/>
        })}
        </div>
    </div>
  );
}
