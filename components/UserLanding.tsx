import SearchForm from "./SearchForm";
import StartUpCard from "./StartUpCard";
import { StartUpCardProps } from "../types/otherTypes";
import { post } from "../data/post";

const UserLanding = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const query = (await searchParams)?.query;

  const filteredPosts = query
    ? post.filter((item: StartUpCardProps) =>
        item.title.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase())
      )
    : post;
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
        <p className="text-30-semibold mb-10">
          {query ? `Showing results for ${query}` : "All Pitches"}
        </p>

        <ul className="card_grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((item: StartUpCardProps) => (
              <div key={item._id}>
                <StartUpCard key={item._id} post={item} />
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default UserLanding;
