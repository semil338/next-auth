import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const id = await getDataFromToken(request);
    const user = await User.findOne({ _id: id }).select("-password");
    console.log(user);

    return NextResponse.json({ message: "User found", user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
