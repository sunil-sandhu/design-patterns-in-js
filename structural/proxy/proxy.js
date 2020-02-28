// proxies can be useful when dealing with slow apis/databases and caching data.
// for example, below we have a fictional GeoCoder API that returns lat/lngs.
// if a result has previously been fetched, we can cache the result in our GeoProxy.
// if the result exists, we return that. if it doesn't, we call the GeoCoder API to get the result.
// for the client, they have no knowledge that a proxy is being used.
// the proxy has the same function names also, so no need for the client to make changes
// as long as the proxy is being used in the first instance.
class GeoCoder {
  getLatLng(address) {
    if (address === "Amsterdam") {
      return "52.3700° N, 4.8900° E";
    } else if (address === "London") {
      return "51.5171° N, 0.1062° W";
    } else if (address === "Paris") {
      return "48.8742° N, 2.3470° E";
    } else if (address === "Berlin") {
      return "52.5233° N, 13.4127° E";
    } else {
      return "";
    }
  }
}

class GeoProxy {
  constructor() {
    this.geocoder = new GeoCoder();
    this.geocache = {};
  }

  getLatLng(address) {
    console.log(this.geocache);
    if (!this.geocache[address]) {
      this.geocache[address] = this.geocoder.getLatLng(address);
    }
    return this.geocache[address];
  }
  getCount() {
    let count = 0;
    for (var code in this.geocache) {
      count++;
    }
    return count;
  }
}

const geo = new GeoProxy();

// geolocation requests
geo.getLatLng("Paris");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("London");
geo.getLatLng("London");
