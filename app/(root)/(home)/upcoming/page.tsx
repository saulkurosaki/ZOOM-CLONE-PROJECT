import CallList from "@/components/shared/CallList";

const Upcoming = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Upcoming</h1>

      <CallList />
    </section>
  );
};

export default Upcoming;
