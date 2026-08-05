import ScrollAnimation from "@/components/ui/you-can-scroll";

export default function DemoOne() {
  return (
    <div className="w-full h-screen">
      <ScrollAnimation
        columns={[
          { id: "women", label: "For Her", items: ["Updos", "Balayage", "Manicure"] },
          { id: "men", label: "For Him", items: ["Beard trim", "Shaving", "Haircut"] },
        ]}
      />
    </div>
  );
}
