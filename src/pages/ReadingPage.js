import React from "react";
import {
  Container,
  Button,
  Card,
  Stack,
  CardMedia,
  CardActionArea,
  Typography,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { removeFromReadingList } from "../redux/BookstoreSlice";
import { useDispatch, useSelector } from "react-redux";

const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const ReadingPage = () => {
  const navigate = useNavigate();
  const books = useSelector((state) => state.readingList);
  const dispatch = useDispatch();

  const handleClickBook = (bookId) => {
    navigate(`/books/${bookId}`);
  };

  const removeBook = (bookId) => {
    dispatch(removeFromReadingList(bookId));
  };

  return (
    <Container>
      <Typography variant="h3" sx={{ textAlign: "center" }} m={3}>
        Book Store
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-around"
        flexWrap={"wrap"}
      >
        {books.map((book) => (
          <div key={book.id} style={{ position: "relative" }}>
            <Card
              sx={{
                width: "12rem",
                height: "27rem",
                marginBottom: "2rem",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`${BACKEND_API}/${book.imageLink}`}
                  alt={`${book.title}`}
                  onClick={() => handleClickBook(book.id)}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {`${book.title}`}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    {`${book.author}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Button
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                backgroundColor: "secondary.light",
                color: "secondary.contrastText",
                padding: "0",
                minWidth: "1.5rem",
              }}
              size="small"
              onClick={() => removeBook(book.id)}
            >
              &times;
            </Button>
          </div>
        ))}
      </Stack>
    </Container>
  );
};

export default ReadingPage;
