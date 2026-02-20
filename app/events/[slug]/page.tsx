import EventDetails from "@/components/EventDetails";

export const dynamic = "force-dynamic";

const EventDetailsPage = ({ params }: { params: { slug: string } }) => {
    return (
        <main>
            <EventDetails slug={params.slug} />
        </main>
    );
};

export default EventDetailsPage;