import React, { useState }  from 'react';
import Navbar from '../../components/Navbar/Navbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import "./Add.css";
import axios from "axios";

const Add = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [action, setAction] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
  
    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };
  
    const handleAuthorChange = (event) => {
      setAuthor(event.target.value);
    };
  
    const handleGenreChange = (event) => {
        setGenre(event.target.value);
      };
  
      const handleActionChange = (event) => {
        setAction(event.target.value);
      };

      const handleLocationChange = (event) => {
        setLocation(event.target.value);
      };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const storedFormData = JSON.parse(localStorage.getItem('user'));
      console.log('Title:', title);
      console.log('Author:', author);
      console.log('Genre:', genre);
      console.log('Action:', action);
      console.log('Price:', price);
      console.log('Location:', location);
      console.log('User:', storedFormData.name);
      let body = new FormData();
            body.append('Title', title);
            body.append('Author', author);
            body.append('Genre', genre);
            body.append('Action', action);
            body.append('Price', price);
            body.append('Location', location);
            body.append('AddedByUserName',storedFormData.name);
            const url = 'https://localhost:7149/api/Book/AddBook';
            const config = {
                headers: {
                  'content-type': 'multipart/form-data'
                         },
                };
              axios.post(url, body, config).then((response) => {
                var data= Array.from(response.data);
              });

    };
  
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
      };

  return (
    <div>
    <Navbar />
    <div style={{fontSize: '3rem'}}> List your book for Sell, Rent or Exchange.</div>
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Title"
            value={title}
            onChange={handleTitleChange}
            fullWidth
            size="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Author"
            value={author}
            onChange={handleAuthorChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Select
            value={genre}
            onChange={handleGenreChange}
            displayEmpty
            fullWidth
            label="Genre"
          >
            <MenuItem value="" disabled style={{fontSize : '1.8rem'}}>
              Select a genre
            </MenuItem>
            <MenuItem value="fiction" style={{fontSize : '1.8rem'}}>Fiction</MenuItem>
            <MenuItem value="non-fiction" style={{fontSize : '1.8rem'}}>Non-Fiction</MenuItem>
            <MenuItem value="fantasy" style={{fontSize : '1.8rem'}}>Fantasy</MenuItem>
            <MenuItem value="novel" style={{fontSize : '1.8rem'}}>Novel</MenuItem>
            <MenuItem value="history" style={{fontSize : '1.8rem'}}>History</MenuItem>
            <MenuItem value="horror" style={{fontSize : '1.8rem'}}>Horror</MenuItem>
            <MenuItem value="thriller" style={{fontSize : '1.8rem'}}>Thriller</MenuItem>
            <MenuItem value="science" style={{fontSize : '1.8rem'}}>Science</MenuItem>
            <MenuItem value="suspense" style={{fontSize : '1.8rem'}}>Suspense</MenuItem>
            <MenuItem value="philosophy" style={{fontSize : '1.8rem'}}>philosophy</MenuItem>
            <MenuItem value="action" style={{fontSize : '1.8rem'}}>Action</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Select
            value={action}
            onChange={handleActionChange}
            displayEmpty
            fullWidth
            label="Action"
          >
            <MenuItem value="" disabled style={{fontSize : '1.8rem'}}>
              Select a Action
            </MenuItem>
            <MenuItem value="fiction" style={{fontSize : '1.8rem'}}>Sell</MenuItem>
            <MenuItem value="non-fiction" style={{fontSize : '1.8rem'}}>Exchange</MenuItem>
            <MenuItem value="fantasy" style={{fontSize : '1.8rem'}}>Rent</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Price"
            value={price}
            onChange={handlePriceChange}
            fullWidth
            size="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Location"
            value={location}
            onChange={handleLocationChange}
            fullWidth
            size="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" size = "large">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
    </div>
  )
}

export default Add
