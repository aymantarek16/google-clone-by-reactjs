import Search from "./Search";
import "./searchPage.css";
import { Link, NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";

const SearchPage = () => {
  const [{ term }] = useStateValue();

  

  const { data } = useGoogleSearch(term);
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            src="https://www.google.com.eg/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="google"
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hidebuttons />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__options">
                <SearchIcon />
                <NavLink to="/all" className="active">
                  All
                </NavLink>
              </div>

              <div className="searchPage__options">
                <DescriptionIcon />
                <NavLink to="/news">News</NavLink>
              </div>

              <div className="searchPage__options">
                <ImageIcon />
                <NavLink to="/images">Images</NavLink>
              </div>

              <div className="searchPage__options">
                <LocalOfferIcon />
                <NavLink to="/shopping">Shopping</NavLink>
              </div>

              <div className="searchPage__options">
                <RoomIcon />
                <NavLink to="/maps">Maps</NavLink>
              </div>

              <div className="searchPage__options">
                <MoreVertIcon />
                <NavLink to="/more">More</NavLink>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__options">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About ({data?.searchInformation.formattedTotalResults}) results (
            {data?.searchInformation.formattedSearchTime}) for {term}
          </p>
          {data?.items.map((item, index) => (
            <div className="searchPage__result" key={index}>
              <a href={item.link} className="searchPage__resultLink">
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      src={item.pagemap?.cse_image[0]?.src}
                      alt="avatar Google"
                      className="searchPage__resultImage"
                    />
                  )}
                {item.displayLink}
              </a>

              <a href={item.link} className="searchPage__resultTitle">
                <h2>{item.title}</h2>
              </a>

              <p className="searchPage__resultDescription">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
