import React from "react";
import ReactGoogleAutocomplete from "react-google-autocomplete";

function CreateTrip() {
  return (
    <div className="px-5 sm:px-10 md:px-32 lg:px-56 xl:px-10 mt-10">
      <h2 className="font-bold text-3xl">
        Tell us your travel preferences 🚞🚙🚡
      </h2>
      <p className="mt-2 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>
      <div className="mt-20">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is your destination of choice?
          </h2>
          <ReactGoogleAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            onPlaceSelected={(place) => {
              console.log(place);
            }}
            options={{
              types: ["(regions)"],
            }}
            placeholder="Enter a destination"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
