import React from 'react'
import './user-modal.css'

const EditUser = ({currentUser, setCurrentUser}) => {


    const handleSave = (event) => {
        setCurrentUser({...currentUser, [event.target.name] : event.target.value})
        event.preventDefault();
    }
    const handleSaveAddress = (event) => {
        setCurrentUser({...currentUser, address : { ...currentUser.address, [event.target.name] : event.target.value}})
        event.preventDefault();
    }
    const handleSaveGeo = (event) => {
        setCurrentUser({...currentUser, address : {  ...currentUser.address, geo : { ...currentUser.address.geo, [event.target.name] : event.target.value}}})
        event.preventDefault();
    }
    const handleSaveCompany = (event) => {
        setCurrentUser({...currentUser, company : { ...currentUser.company, [event.target.name] : event.target.value}})
        event.preventDefault();
    }
    
    
  return (
    <form>
     <h1>Edit User</h1>
        <label>
            <p>Name</p>
            <input name="name" defaultValue={currentUser.name} onChange={handleSave}/>
        </label>
        <label>
            <p>Username</p>
            <input name="username" defaultValue={currentUser.username} onChange={handleSave}/>
        </label>
        <label>
            <p>Email</p>
            <input name="email" defaultValue={currentUser.email} onChange={handleSave}/>
        </label>
        <h4>Address</h4>
        <div style={{paddingLeft: "10px"}}>
            <label>
                <p>Street</p>
                <input name="street" defaultValue={currentUser.address.street} onChange={handleSaveAddress}/>
            </label>
            <label>
                <p>Suite</p>
                <input name="suite" defaultValue={currentUser.address.suite} onChange={handleSaveAddress}/>
            </label>
            <label>
                <p>City</p>
                <input name="city" defaultValue={currentUser.address.city} onChange={handleSaveAddress}/>
            </label>
            <label>
                <p>Zipcode</p>
                <input name="zipcode" defaultValue={currentUser.address.zipcode} onChange={handleSaveAddress}/>
            </label>
        </div>
        <h5>Geolocation</h5>
        <div style={{paddingLeft: "10px"}}>
            <label>
                <p>Latitude</p>
                <input name="lat" defaultValue={currentUser.address.geo.lat} onChange={handleSaveGeo}/>
            </label>
            <label>
                <p>Longitude</p>
                <input name="lng" defaultValue={currentUser.address.geo.lng} onChange={handleSaveGeo}/>
            </label>
        </div>
        
        <label>
            <p>Phone</p>
            <input name="phone" defaultValue={currentUser.phone} onChange={handleSave}/>
        </label>
        <label>
            <p>Website</p>
            <input name="website" defaultValue={currentUser.website} onChange={handleSave}/>
        </label>
        <h4>Company</h4>
        <div style={{paddingLeft: "10px"}}>
            <label>
                <p>Company Name</p>
                <input name="companyName" defaultValue={currentUser.company.name} onChange={handleSaveCompany}/>
            </label>
            <label>
                <p>Catch Phrase</p>
                <input name="catchPhrase" defaultValue={currentUser.company.catchPhrase} onChange={handleSaveCompany}/>
            </label>
            <label>
                <p>Business</p>
                <input name="bs" defaultValue={currentUser.company.bs} onChange={handleSaveCompany}/>
            </label>
        </div>
    </form>
  )
}

export default EditUser