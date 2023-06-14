import { FC, useEffect,  } from "react";
import { HeaderDubbing } from "./components/HeaderDubbing";
import { useLocation,  } from "react-router-dom";
import { CardList } from "./components/card/CardList";
import { setPagination } from "./core/categoryHelper";

export const DubbingAlbum: FC = () => {
  const location: any = useLocation();
  const { url, id } = location.state;

  useEffect(() => {
    const isPageRefresh = sessionStorage.getItem('isPageNavigated');
 
    if (isPageRefresh) {
    //  sessionStorage.setItem('isPageNavigated', 'false');
 
    } else {
      setPagination(1,id)
      sessionStorage.setItem('isPageNavigated', 'true');
    }
  

    return () => {
    //  const storedValue = sessionStorage.getItem('isPageNavigated');
    //  if (storedValue ) {
      sessionStorage.setItem('isPageNavigated', 'false');
        sessionStorage.removeItem('isPageNavigated');
    //  }
  
    };
  }, []);
  return (
    <div>
      {" "}
      <HeaderDubbing url={url} />
      <div
        className="d-flex justify-content-center"
        style={{
          position: "relative",
          background: "white",
          zIndex: "2",
        }}
      >
        <CardList category_id={id} />
      </div>
    </div>
  );
};
