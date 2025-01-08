"use client";
import React, { useEffect, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import CardInfo from "./_components/CardInfo";
import { db } from "@/utils/dbConfig";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import { Budgets, Expenses, Incomes } from "@/utils/schema";
import BarChartDashboard from "./_components/BarChartDashboard";
import BudgetItem from "./budgets/_components/BudgetItem";
import ExpenseListTable from "./expenses/_components/ExpenseListTable";
<<<<<<< HEAD

=======
>>>>>>> 99baa9ff4ecf255ed5db39c5478958c0c64e9ba5
function Dashboard() {
  const { user } = useUser();

  const [budgetList, setBudgetList] = useState([]);
  const [incomeList, setIncomeList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);
<<<<<<< HEAD

  useEffect(() => {
    if (user) {
      getBudgetList();
    }
  }, [user]);

  /**
   * Used to get the budget list
=======
  useEffect(() => {
    user && getBudgetList();
  }, [user]);
  /**
   * used to get budget List
>>>>>>> 99baa9ff4ecf255ed5db39c5478958c0c64e9ba5
   */
  const getBudgetList = async () => {
    const result = await db
      .select({
        ...getTableColumns(Budgets),
<<<<<<< HEAD
=======

>>>>>>> 99baa9ff4ecf255ed5db39c5478958c0c64e9ba5
        totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
        totalItem: sql`count(${Expenses.id})`.mapWith(Number),
      })
      .from(Budgets)
      .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
      .groupBy(Budgets.id)
      .orderBy(desc(Budgets.id));
    setBudgetList(result);
    getAllExpenses();
    getIncomeList();
  };

  /**
<<<<<<< HEAD
   * Get income stream list
=======
   * Get Income stream list
>>>>>>> 99baa9ff4ecf255ed5db39c5478958c0c64e9ba5
   */
  const getIncomeList = async () => {
    try {
      const result = await db
        .select({
          ...getTableColumns(Incomes),
          totalAmount: sql`SUM(CAST(${Incomes.amount} AS NUMERIC))`.mapWith(
            Number
          ),
        })
        .from(Incomes)
<<<<<<< HEAD
        .groupBy(Incomes.id); // Assuming you want to group by ID or another relevant column
=======
        .groupBy(Incomes.id); // Assuming you want to group by ID or any other relevant column

>>>>>>> 99baa9ff4ecf255ed5db39c5478958c0c64e9ba5
      setIncomeList(result);
    } catch (error) {
      console.error("Error fetching income list:", error);
    }
  };

  /**
<<<<<<< HEAD
   * Used to get all expenses belonging to the user
=======
   * Used to get All expenses belong to users
>>>>>>> 99baa9ff4ecf255ed5db39c5478958c0c64e9ba5
   */
  const getAllExpenses = async () => {
    const result = await db
      .select({
        id: Expenses.id,
        name: Expenses.name,
        amount: Expenses.amount,
        createdAt: Expenses.createdAt,
      })
      .from(Budgets)
      .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress.emailAddress))
      .orderBy(desc(Expenses.id));
    setExpensesList(result);
  };

  return (
    <div className="p-8 bg-">
      <h2 className="font-bold text-4xl">Hi, {user?.fullName} 👋</h2>
      <p className="text-gray-500">
<<<<<<< HEAD
        Here's what's happening with your money. Let's manage your expenses!
=======
        Here's what happenning with your money, Lets Manage your expense
>>>>>>> 99baa9ff4ecf255ed5db39c5478958c0c64e9ba5
      </p>

      <CardInfo budgetList={budgetList} incomeList={incomeList} />
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-5">
        <div className="lg:col-span-2">
          <BarChartDashboard budgetList={budgetList} />

          <ExpenseListTable
            expensesList={expensesList}
            refreshData={() => getBudgetList()}
          />
        </div>
        <div className="grid gap-5">
          <h2 className="font-bold text-lg">Latest Budgets</h2>
<<<<<<< HEAD
          {budgetList?.length > 0 ? (
            budgetList.map((budget) => (
              <BudgetItem budget={budget} key={budget.id} />
            ))
          ) : (
            [1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-[180px] w-full bg-slate-200 rounded-lg animate-pulse"
              ></div>
            ))
          )}
=======
          {budgetList?.length > 0
            ? budgetList.map((budget, index) => (
                <BudgetItem budget={budget} key={index} />
              ))
            : [1, 2, 3, 4].map((item, index) => (
                <div
                  className="h-[180xp] w-full
                 bg-slate-200 rounded-lg animate-pulse"
                ></div>
              ))}
>>>>>>> 99baa9ff4ecf255ed5db39c5478958c0c64e9ba5
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default Dashboard;
=======
export default Dashboard;
>>>>>>> 99baa9ff4ecf255ed5db39c5478958c0c64e9ba5
