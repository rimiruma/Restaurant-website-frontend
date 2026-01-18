import { NextResponse } from "next/server";
import { dbConnect, collections } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    console.log(id);
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid menu ID" },
        { status: 400 }
      );
    }

    const menuCollection = await dbConnect(collections.MenuItems);

    const menuItem = await menuCollection.findOne({
      _id: new ObjectId(id),
    });
    console.log(menuItem);
    if (!menuItem) {
      return NextResponse.json(
        { message: "Menu item not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(menuItem);
  } catch (error) {
    console.error("GET /api/menu/[id] error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = await params;
    const body = await req.json();

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid menu ID" },
        { status: 400 }
      );
    }

    const menuCollection = await dbConnect(collections.MenuItems);

    // Remove _id from body to prevent immutable field error
    const { _id, ...updateData } = body;

    const result = await menuCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { message: "Menu item not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Updated successfully" });
  } catch (error) {
    console.error("PUT /api/menu/[id] error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid menu ID" },
        { status: 400 }
      );
    }

    const menuCollection = await dbConnect(collections.MenuItems);
    const result = await menuCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "Menu item not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("DELETE /api/menu/[id] error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
