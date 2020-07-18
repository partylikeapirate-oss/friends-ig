import React, { Component } from "react";
import "./style.css";
import Modal from 'react-modal';
import Nav from '../../components/Nav';
import API from "../../utils/API";
import GoogleMapReact from 'google-map-react';
import Marker from '../../components/Marker';
// import PlacesAutocomplete from 'react-places-autocomplete';
// import { geocodeByAddress, geocodeByPlaceId, getLatLng} from 'react-places-autocomplete';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

class LandingPage extends Component {

    state = {
        zipCode: "",
        zipAddress: [],
        streetAddress: "",
        houseNumber: "",
        city: "",
        state: "",
        zipOptions: null,
        showMap: false
    }

    // Handles the state change when user interacts with inputs

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
        // Checks Database immediately for a match
        setTimeout(() => { this.handleInputCheck() }, 500)
    };

    // Similiar to function above but doesn't trigger 'handleInputCheck'
    handleAddressInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    // Handle Input check queries DB for a match and returns array of matched addresses
    handleInputCheck = () => {

        API.findZip(this.state.zipCode)
            .then(res => {
                console.log("Zipcodes Found!")
                console.log(res.data)
                this.setState({
                    zipAddresses: res.data
                })
                // This is a secondary function that reviews the data returned and acts accordingly
                setTimeout(() => { this.reviewAddresses() }, 1500)
            }).catch(err => {
                console.log("No Zipcodes Found")
                this.setState({
                    zipAddresses: "",
                    zipOptions: "",
                    city: "",
                    state: ""
                })
                console.log(err)
            })

    }

    // This checks if there is more than one result, and if so displays options
    reviewAddresses = () => {

        if (this.state.zipAddresses.length > 1) {
            this.displayZipOptions()

        } else if (this.state.zipAddresses.length === 1) {
            this.setState({
                city: this.state.zipAddresses[0].City,
                state: this.state.zipAddresses[0].State,
                zipOptions: ""
            })

        } else {
            console.log("No addresses found, you should NOT see this error")
        }
    }

    // This actually displays the options in the state
    displayZipOptions = () => {
        this.setState({
            zipOptions: this.state.zipAddresses,
            city: "",
            state: ""
        })
    }

    // This is triggered when a user selects on of the many options available
    selectOption = (id) => {

        for (var i = 0; i < this.state.zipOptions.length; i++) {
            if (this.state.zipOptions[i]._id === id) {
                this.setState({
                    city: this.state.zipOptions[i].City,
                    state: this.state.zipOptions[i].State,
                    zipOptions: ""
                })
            }
        }

    }

    // This is where the values saved in state is used to get a Longitude and Latitude using Geocoder API from Google Maps
    mapAddress = (event) => {
        event.preventDefault();
        console.log("Mapping address: " + this.state.houseNumber + " " + this.state.streetAddress + " " + this.state.city + " " + this.state.state + ", " + this.state.zipCode)
        var addressBody = {
            number: this.state.houseNumber,
            street: this.state.streetAddress,
            suffix: this.state.streetSuffix,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }
        API.findAddress(addressBody)
            .then(res => {
                console.log(res.data.results)

                this.setState({
                    addLong: res.data.results[0].geometry.location.lng,
                    addLat: res.data.results[0].geometry.location.lat,
                    showMap: true
                })

            }).catch(err => {
                console.log(err)
            })
    }


    render() {
        return (

            <div className="container-fluid" style={{ background: '#FFF8DC', padding: '0', height: '1600px', color: 'whitesmoke' }}>


                <div className="row" style={{ padding: '5%' }}>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="card bg-primary" style={{ padding: '50px' }}>
                            <div className="card-header">
                                <h3>Address Lookup by Zipcode</h3>
                            </div>
                            <div className="card-body">

                                {/* This is the first thing shown, a Zipcode Input */}
                                <div className="row">
                                    <div className="col-12">
                                        <form>
                                            <label>Enter Zipcode</label>
                                            <input type="number" onChange={this.handleInputChange} name="zipCode" value={this.state.zipCode} />
                                        </form>
                                    </div>

                                </div>

                                {/* This displays the City and State if they exist in the component's State, triggered after selection or API return of 1 item */}
                                <div className="row">
                                    <div className="col-12">
                                        {this.state.city ?
                                            <h2>{this.state.city + ", " + this.state.state}</h2>
                                            : null}
                                    </div>
                                </div>


                                {/* This is the input for the Street address, it only populates when the City of the City/State data returns */}
                                <div className="row">
                                    <div className="col-12">
                                        {this.state.city ?
                                            <div className="col-12">
                                                <form>

                                                    <label>Street Address</label>
                                                    <div className="form-row">
                                                 
                                                        <input style={{width: '20%'}}type="text" onChange={this.handleAddressInput} name="houseNumber" value={this.state.houseNumber} placeholder="123"/>
                                                  
                                                        <input style={{width: '60%'}}type="text" onChange={this.handleAddressInput} name="streetAddress" value={this.state.streetAddress} placeholder="Main"/>
                                                     
                                                       
                                                        <input style={{width: '20%'}}type="text" onChange={this.handleAddressInput} name="streetSuffix" value={this.state.streetSuffix} placeholder="Street"/>
                                                     
                                                    </div>

                                                    <button onClick={this.mapAddress} className="btn btn-warning">Map It!</button>
                                                </form>

                                            </div> : null}
                                    </div>
                                </div>

                               
                                {/* This lays out the options for the cities */}
                                <div className="row">
                                    {this.state.zipOptions ?
                                        <>
                                            <div className="col-12"><h4>Please select the City you'd like to view</h4></div>
                                            <>
                                                {this.state.zipOptions.map(zipOption => (
                                                    <div className="col-lg-3 col-md-6" key={zipOption._id}>
                                                        <button style={{ margin: '5px', width: '100%' }} className="btn btn-light" onClick={() => this.selectOption(zipOption._id)}>{zipOption.City}</button>
                                                    </div>
                                                ))}

                                            </>
                                        </>


                                        : null}
                                </div>

                                {/* This is where the Map component lives, brought by Google Maps. It only exists after the Geocoder API sets the Component State's 'addLat and addLong' */}
                                <div className="row">
                                    <div className="col-12" style={{width: '500px', height: '500px'}}>
                                        {this.state.showMap ? 

                                        <GoogleMapReact
                                            bootstrapURLKeys={ {key: '[API KEY]'}}
                                            defaultCenter={{ lat: 39.952583, lng: -75.165222}}
                                            defaultZoom={5}
                                        >
                                            {/* This is the marker and is displayed using the Lat / Lng gathered from the Geocoder API */}
                                            <Marker lat={this.state.addLat} lng={this.state.addLong} text="Address Searched"/>

                                        </GoogleMapReact>
                                    
                                        : null}
                                    </div>
                                </div>

                            </div>
                            <br />
                        </div>


                    </div>
                    <div className="col-md-2"></div>


                </div>




              
            </div >


        )

    }

}

export default LandingPage;