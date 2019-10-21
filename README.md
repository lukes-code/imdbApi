# 🎥 imdbApi
A movie search website using the OMDb Api for IMDb

🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀

This is still undergoing development, road map as follows:<br />

✔️ Successful response from ombdApi<br />
✔️ Grid system<br />
✔️ Individual information pages with ext. link to IMDb pages<br />
✔️ CSS<br />
✔️ My personal favourite films/shows<br />

🎥 This project works by searching the IMDb through the OMDb API.<br />

The search bar send a request based on the information you have typed in and returns the most relevant movies!<br />
The most fun part about this project was allowing the user to create their own favourites, they can do so by checking the star next to the corresponding movie, this information is stored in an array before being converted to JSON and saved in localStorage. When the user then visits the "my favourites" section the JSON is converted back in to an array, firing off a request based on the information saved and once again returning the relevant movies. Because the information is saved in localStorage, the user can research and navigate to which ever page they please without losing their favourites. This also works backwards in that if you 'un-star' a movie it is subsequently removed from your favourites!
Each movie's star remains 'starred' or 'un-starred' when navigating through the Open Movie Database thanks to the localStorage also!<br />

This project was made with the following:<br />
HTML<br />
CSS<br />
JavaScript<br />
jQuery<br />
OMDbApi<br /
Axios HTTP client<br /> 
