
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, ShoppingCart, Instagram, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">skinmaisoficial</h1>
        <div className="flex items-center gap-4">
          <Button variant="ghost">
            <ShoppingCart className="w-5 h-5" />
          </Button>
          <Button variant="ghost">
            <Phone className="w-5 h-5" />
          </Button>
        </div>
      </header>
      <div className="bg-pink-100 text-center py-16 px-4">
        <h2 className="text-4xl font-semibold mb-2">Beleza e Estilo com Sofisticação</h2>
        <p className="text-lg mb-6">Cosméticos e moda feminina para realçar sua essência</p>
        <Button className="text-lg px-6 py-3">Ver Produtos</Button>
      </div>
    </div>
  );
}
