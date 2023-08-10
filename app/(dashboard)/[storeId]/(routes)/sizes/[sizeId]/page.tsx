import prismadb from "@/lib/prismadb";
import SizeForm from "./components/size-form";

const SizePage = async ({ params }: { params: { sizeId: string } }) => {
  const size = await prismadb.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });

  return (
    <section className="section-padding">
      <SizeForm initialData={size} />
    </section>
  );
};

export default SizePage;
