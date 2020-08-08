import { connect } from 'react-redux';
import React, { Component } from 'react';
import ImageUpload from '../ImageUpload/ImageUpload';
import './IdeasPage.css';
import {
  withStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Select,
  MenuItem,
  TextField,
  Button,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import StarIcon from '@material-ui/icons/Star';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

// BASIC CONVERTED MATERIAL UI TABLE
// classes.tableHead, table, anything is just talking about styles
// that are manipulated here
const styles = (theme) => ({
  allContainer: {},
  root: {
    width: '80%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    margin: 'auto',
    // 'border-radius': '10px',
  },
  formControl: {
    'text-align': 'center',
    margin: '5px',
  },
  formControlContainer: {
    'text-align': 'center',
    width: 'auto',
    'margin-bottom': '120px',
    'margin-top': '20px',
  },
  menuItemsContainer: {
    flexWrap: 'wrap',
  },
  menuItem: {
    margin: theme.spacing.unit / 4,
  },
  invisibleText: {
    color: 'white',
  },
  newOrAddIdeaButton: {
    color: 'white',
    'font-family': 'Montserrat',
    'background-color': '#161616',
    margin: '10px',
    'margin-top': '10px',
    '&:hover': {
      color: 'gold',
      'background-color': '#161616',
    },
  },
  uploadImageButton: {
    'padding-top': '0px',
    'padding-bottom': '0px',
    'background-color': '#161616',
    'margin-bottom': '50px',
    'margin-top': '10px',
    '&:hover': {
      'background-color': '#161616',
    },
  },
  dateField: {
    'margin-top': '0px',
  },
  categorySelector: { 'margin-top': '-10px' },
  tableHead: {
    'background-color': '#161616',
  },
  table: {
    minWidth: 700,
  },
  tableHeadCell: {
    'font-size': '16px',
    'font-family': 'Montserrat',
    'font-weight': '500',
    color: 'white',
    'padding-top': '18px',
    'padding-bottom': '18px',
    'padding-left': '18px',
    // 'text-transform': 'uppercase',
  },
  tableCell: {
    'font-family': 'Montserrat',
    'font-size': '13px',
    'text-transform': 'capitalize',
    'padding-left': '18px',
    'padding-top': '10px',
    'padding-bottom': '10px',
  },
  tableCellDescription: {
    'font-family': 'Montserrat',
    'font-size': '13px',
    'padding-left': '15px',
  },
  starIconForm: {
    'font-size': '40px',
    'padding-top': '10px',
    'padding-left': '0px',
    'padding-right': '0px',
    '&:hover': {
      color: 'gold',
    },
  },
  starIconTable: {
    'font-size': '20px',
    'padding-top': '20px',
    'padding-left': '0px',
    'padding-right': '15px',
    '&:hover': {
      color: 'gold',
    },
  },
  editIcon: {
    'font-size': '20px',
    'padding-top': '10px',
    'padding-bottom': '10px',
    'padding-left': '0px',
    'padding-right': '15px',
  },
  deleteIcon: {
    'font-size': '20px',
    'padding-top': '10px',
    'padding-bottom': '10px',
    'padding-left': '0px',
    'padding-right': '15px',
  },
});

// MENU props handle the scrollable selector
const CategorySelector_HEIGHT = 48;
const CategorySelector_PADDING_TOP = 8;
const CategorySelectorProps = {
  PaperProps: {
    style: {
      maxHeight: CategorySelector_HEIGHT * 3.4 + CategorySelector_PADDING_TOP,
      width: 150,
    },
  },
};

// MENU props handle the scrollable table
const table_HEIGHT = 48;
const table_PADDING_TOP = 8;
const tableProps = {
  PaperProps: {
    style: {
      maxHeight: table_HEIGHT * 1.4 + table_PADDING_TOP,
      width: 150,
    },
  },
};

class IdeasPage extends Component {
  componentDidMount() {
    // use component did mount to dispatch an action to request the SearchList from the API
    this.props.dispatch({ type: 'FETCH_IDEAS' });
    this.props.dispatch({ type: 'FETCH_CATEGORIES' });
  }
  state = {
    description: '',
    image_url: '', //,
  };

  addIdea = () => {
    console.log('in addIdea');

    const payload = {
      name: this.state.name,
      description: this.state.description,
      image_url: this.state.image_url,
      category_id: this.state.category_id,
      link: this.state.link,
      date: this.state.date,
    };
    this.props.dispatch({ type: 'ADD_IDEA', payload });
  };

  handleInputName = (event) => {
    console.log('in handleInputName, value:', event.target.value);

    // this.setState sets the state's comment property = to the user's input
    this.setState({
      name: event.target.value,
    });
  }; //end handleInputName

  handleInputDescription = (event) => {
    console.log('in handleInputDescription, value:', event.target.value);

    // this.setState sets the state's comment property = to the user's input
    this.setState({
      description: event.target.value,
    });
  }; //end handleInputDescription

  handleInputImageUrl = (event) => {
    console.log('in handleInputImageUrl, value:', event.target.value);

    // this.setState sets the state's comment property = to the user's input
    this.setState({
      image_url: event.target.value,
    });
  }; //end handleInputImageUrl

  handleInputCategory = (event) => {
    console.log('in handleInputCategory, value:', event.target.value);

    // this.setState sets the state's comment property = to the user's input
    this.setState({
      category_id: event.target.value,
    });
  }; //end handleInputCategory

  handleInputLink = (event) => {
    console.log('in handleInputLink, value:', event.target.value);

    // this.setState sets the state's comment property = to the user's input
    this.setState({
      link: event.target.value,
    });
  }; //end handleInputLink

  handleInputDate = (event) => {
    console.log('in handleInputDate, value:', event.target.value);

    // this.setState sets the state's comment property = to the user's input
    this.setState({
      date: event.target.value,
    });
  }; //end handleInputDate

  constructor() {
    super();
    var today = new Date(),
      date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate();
    this.state = {
      date: date,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.allContainer}>
        {/* THE FORM */}
        <div className={classes.formControlContainer}>
          <FormControl className={classes.formControl}>
            <Button
              variant="contained"
              // color="white"
              className={classes.newOrAddIdeaButton}
              endIcon={<EmojiObjectsIcon>New</EmojiObjectsIcon>}
            >
              New
            </Button>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="component-helper">Name *</InputLabel>
            <Input
              id="component-helper"
              value={this.state.name}
              onChange={this.handleInputName}
              aria-describedby="component-helper-text"
            />
            <FormHelperText id="component-helper-text">Required</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="component-helper">Description *</InputLabel>
            <Input
              id="component-helper"
              value={this.state.description}
              onChange={this.handleInputDescription}
              aria-describedby="component-helper-text"
            />
            <FormHelperText id="component-helper-text">Required</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="component-helper">Link</InputLabel>
            <Input
              id="component-helper"
              value={this.state.link}
              onChange={this.handleInputLink}
              aria-describedby="component-helper-text"
            />
            <FormHelperText id="component-helper-text"></FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="component-helper">Image Url</InputLabel>
            <Input
              id="component-helper"
              value={this.state.image_url}
              onChange={this.handleInputImageUrl}
              aria-describedby="component-helper-text"
            />
            <FormHelperText id="component-helper-text"></FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <Button
              variant="contained"
              // color="white"
              className={classes.uploadImageButton}
            >
              <ImageUpload />
            </Button>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel className={classes.categorySelector}>
              Category *
            </InputLabel>
            <Select
              MenuProps={CategorySelectorProps}
              value={this.state.category_id}
              onChange={this.handleInputCategory}
            >
              {/* <MenuItem value="">
                <em>None</em>
              </MenuItem> */}
              {this.props.categories.map((category, index) => (
                <MenuItem key={index} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
              {/* <MenuItem value={11}>New Category</MenuItem> */}
            </Select>
            <FormHelperText>
              Required
              <span className={classes.invisibleText}>
                invisible text is here
              </span>
            </FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <StarIcon
              //     value={this.state.favorited}
              // onChange={this.handleInput}
              className={classes.starIconForm}
            ></StarIcon>
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              id="date"
              label="Date"
              type="date"
              // defaultValue sets the calendar to today's date via
              // the constructor function above
              value={this.state.date}
              onChange={this.handleInputDate}
              defaultValue={this.state.date}
              className={classes.dateField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <Button
              variant="contained"
              // color="white"
              onClick={this.addIdea}
              className={classes.newOrAddIdeaButton}
              endIcon={<EmojiObjectsIcon>Add</EmojiObjectsIcon>}
            >
              Add
            </Button>
          </FormControl>
        </div>
        {/* THE TABLE */}
        <div className="tableContainer"></div>
        <Paper className={classes.root} elevation={3}>
          <Table className={classes.table} MenuProps={tableProps}>
            <TableHead className={classes.tableHead}>
              <TableRow className={classes.tableHead}>
                <TableCell className={classes.tableHeadCell}>Name</TableCell>
                <TableCell className={classes.tableHeadCell} align="left">
                  Description
                </TableCell>
                <TableCell className={classes.tableHeadCell} align="left">
                  Link
                </TableCell>
                <TableCell className={classes.tableHeadCell} align="left">
                  Image
                </TableCell>
                <TableCell className={classes.tableHeadCell} align="left">
                  Category
                </TableCell>
                <TableCell className={classes.tableHeadCell} align="left">
                  Favorited
                </TableCell>
                <TableCell className={classes.tableHeadCell} align="left">
                  Date
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.ideas === []
                ? 'please wait..'
                : this.props.ideas.map((ideas, index) => (
                    <TableRow key={index}>
                      <TableCell className={classes.tableCell}>
                        {ideas.name}
                      </TableCell>
                      <TableCell
                        className={classes.tableCellDescription}
                        align="left"
                      >
                        {ideas.description}
                      </TableCell>
                      <TableCell className={classes.tableCell} align="left">
                        {ideas.link}
                      </TableCell>
                      <TableCell className={classes.tableCell} align="left">
                        <img
                          src={ideas.image_url}
                          // onClick={this.clickhandler}
                        ></img>
                      </TableCell>
                      <TableCell className={classes.tableCell} align="left">
                        {ideas.category}
                        {/* {JSON.stringify(ideas.category_id)} */}
                      </TableCell>
                      <TableCell className={classes.tableCell} align="left">
                        {JSON.stringify(ideas.favorited)}
                        {ideas.favorited}
                      </TableCell>
                      <TableCell className={classes.tableCell} align="left">
                        {ideas.date.split('T')[0]}
                      </TableCell>
                      {/* Star is for favorite */}
                      <StarIcon className={classes.starIconTable}></StarIcon>
                      <EditIcon className={classes.editIcon}></EditIcon>
                      <DeleteIcon className={classes.deleteIcon}></DeleteIcon>
                      {/* <p>{JSON.stringify(index)}</p>
                      <p>{JSON.stringify(ideas.name)}</p> */}
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ideas: state.ideas,
  categories: state.categories,
});

export default withStyles(styles)(connect(mapStateToProps)(IdeasPage));
