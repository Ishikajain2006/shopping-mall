import { NextResponse } from "next/server";

const products = [
  { id: 1, name: "Fashion Store", category: "Fashion", floor: "Ground Floor", price: "₹₹" },
  { id: 2, name: "Tech World", category: "Electronics", floor: "First Floor", price: "₹₹₹" },
  { id: 3, name: "Food Court", category: "Food", floor: "Second Floor", price: "₹" },
  { id: 4, name: "Home & Living", category: "Lifestyle", floor: "First Floor", price: "₹₹" }
];

export async function GET() {
  return NextResponse.json({ success: true, products });
}
