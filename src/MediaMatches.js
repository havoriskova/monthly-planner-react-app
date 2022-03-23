import {useState, useEffect} from "react";

//export default function MediaMatches(width) {
// let [isMatching, setIsMatching] = useState();

//   useEffect(() => {
//     const media = window.matchMedia(width);

//     if (media.matches !== isMatching) setisMatching(media.matches);

//     const listener = () => setIsMatching(media.matches);

//     media.addListener(listener);

//     return () => media.removeListener(listener);
//   }, [query, matches]);


// return isMatching // vracím true nebo false hodnotu

//}


export default function MediaMatches(
  query,
  defaultMatches = window.matchMedia(query).matches
) {
  const [matches, setMatches] = useState(defaultMatches);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) setMatches(media.matches);

    const listener = () => setMatches(media.matches);

    media.addListener(listener);

    return () => media.removeListener(listener);
  }, [query, matches]);

  return matches;
}
