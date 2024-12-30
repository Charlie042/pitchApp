import SearchForm from "./SearchForm";
import StartUpCard from "./StartUpCard";
import { StartUpCardProps } from "../utils/types";
import { formatDate } from "../utils";

const post =[{
  date: formatDate(new Date()),
  id: 1,
  title: "Pitch Your Startup, Connect with Entrepreneurs",
  description: "Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions",
  image: "/images/post1.png"
}]

const UserLanding = async ({searchParams}: {searchParams: Promise<{query: string}>}) => {
  const query = (await searchParams)?.query;
  return (
    <>
      <section className="pink_container">
        <p className="tag">Pitch, vote and Grow</p>
        <h1 className="heading">
          {" "}
          Pitch Your Startup, Connect with Entrepreneurs
        </h1>
        <p className="sub-heading ">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>

        <SearchForm query={query} />
      </section>
      <div className="section_container">
        <p className="text-30-semibold">{query ? `Showing results for ${query}` : "Search for a pitch"}</p>
      </div>
      <div className="section_container">
       {post.length > 0 ? post.map((item:StartUpCardProps) => (
          <div key={item.id}>
            <StartUpCard key={item.id} post={item}/>
          </div>
        )) : <p>No results found</p>}
      </div>
    </>
  );
};

export default UserLanding;