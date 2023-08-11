import React from "react";

import OrderClient from "./components/client";
import prismadb from "@/lib/prismadb";
import { OrderColumn } from "./components/columns";
import { formatter } from "@/lib/utils";
import { format } from "date-fns";

const OrdersPage = async ({ params }: { params: { storeId: string } }) => {
  const orders = await prismadb.order.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  const formattedOrders: OrderColumn[] = orders.map((item) => ({
    id: item.id,
    phone: item.phone,
    address: item.address,
    products: item.orderItems.map((orderItem) => orderItem.product.name).join(', '),
    totalPrice: formatter.format(item.orderItems.reduce((total, item) => {
      return total + Number(item.product.price)
    }, 0)),
    isPaid: item.isPaid,
    createdAt: format(item.createdAt, 'MMMM do, yyyy')
  }));

  return (
    <section className="section-padding">
      <OrderClient data={formattedOrders} />
    </section>
  );
};

export default OrdersPage;
