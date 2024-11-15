"use client";
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo } from "react";
import { FiPercent } from "react-icons/fi";
import {
  IoIosAdd,
  IoMdAlert,
  IoMdGlobe,
  IoMdHome,
  IoMdPerson,
} from "react-icons/io";
import { MdCategory, MdCurrencyRupee } from "react-icons/md";

const cardData = [
  {
    id: "1",
    title: "In-store Sales",
    currency: "₹",
    amount: 5345.43,
    orders: "5k",
    percentageChange: 5.7,
    icon: "IoMdHome",
  },
  {
    id: "2",
    title: "Website Sales",
    currency: "₹",
    amount: 64347.12,
    orders: "21k",
    percentageChange: 12.4,
    icon: "IoMdGlobe",
  },
  {
    id: "3",
    title: "Discount",
    currency: "₹",
    amount: 14235.12,
    orders: "6k",
    percentageChange: 3.5,
    icon: "IoMdPerson",
  },
  {
    id: "4",
    title: "Affiliate",
    currency: "₹",
    amount: 8345.23,
    orders: "150",
    percentageChange: -3.5,
    icon: "IoMdAlert",
  },
];

// Icon mapping to dynamically use icons based on the icon name in JSON
const iconMap = {
  IoMdHome: <IoMdHome />,
  IoMdGlobe: <IoMdGlobe />,
  IoMdPerson: <IoMdPerson />,
  IoMdAlert: <IoMdAlert />,
};

const data = [
  {
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Smartphone X",
    category: "Electronics",
    stock: true,
    price: 1200,
    quantity: 50,
    status: "Complete",
  },
  {
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Laptop Pro",
    category: "Computers",
    stock: false,
    price: 2500,
    quantity: 20,
    status: "Pending",
  },
  {
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Wireless Earbuds",
    category: "Accessories",
    stock: true,
    price: 150,
    quantity: 100,
    status: "In Progress",
  },
  {
    profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Smartwatch Z",
    category: "Wearables",
    stock: true,
    price: 300,
    quantity: 70,
    status: "Rejected",
  },
  {
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "4K LED TV",
    category: "Electronics",
    stock: true,
    price: 500,
    quantity: 15,
    status: "Complete",
  },
  {
    profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Bluetooth Speaker",
    category: "Audio",
    stock: false,
    price: 120,
    quantity: 45,
    status: "Pending",
  },
];

const ListOfProduct = () => {
  const getStatusStyles = (status) => {
    switch (status) {
      case "Complete":
        return { backgroundColor: "#DFF2BF", border: "1px solid #4CAF50" };
      case "Pending":
        return { backgroundColor: "#FFECB3", border: "1px solid #FFC107" };
      case "In Progress":
        return { backgroundColor: "#BBDEFB", border: "1px solid #2196F3" };
      case "Rejected":
        return { backgroundColor: "#FFCDD2", border: "1px solid #F44336" };
      default:
        return { backgroundColor: "#E0E0E0", border: "1px solid #757575" };
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "edit",
        header: "Edit",
        size: 50,
        Cell: () => (
          <Button variant="contained" color="primary" size="small">
            Edit
          </Button>
        ),
      },
      {
        accessorKey: "profileImage",
        header: "Product Name",
        size: 200,
        Cell: ({ row }) => (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src={row.original.profileImage}
              alt="Product Image"
              sx={{ mr: 2 }}
            />
            <Typography>{row.original.name}</Typography>
          </Box>
        ),
      },
      {
        accessorKey: "category",
        header: "Category",
        size: 100,
        Cell: ({ cell }) => (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MdCategory style={{ marginRight: 4 }} />
            <Typography>{cell.getValue()}</Typography>
          </Box>
        ),
      },
      {
        accessorKey: "stock",
        header: "Stock",
        size: 80,
        Cell: ({ cell, row }) => (
          <Switch
            checked={cell.getValue()}
            onChange={() => {
              // handle stock toggle logic here, if needed
            }}
          />
        ),
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 100,
        Cell: ({ cell }) => `₹${cell.getValue()}`,
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
        size: 100,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 100,
        Cell: ({ cell }) => {
          const status = cell.getValue();
          return (
            <Box
              sx={{
                p: 1,
                borderRadius: "8px",
                textAlign: "center",
                fontWeight: "bold",
                color: "#333",
                ...getStatusStyles(status),
              }}
            >
              {status}
            </Box>
          );
        },
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    initialState: { columnVisibility: { edit: false } },
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{
          marginBottom: "10px",
        }}
      >
        <Box>
          <FilterSection />
        </Box>
        <Box>
          <Button
            variant="contained"
            startIcon={<IoIosAdd />}
            sx={{
              marginLeft: "1rem",
              padding: "8px 16px",
              fontWeight: "bold",
              color: "white",
              backgroundColor: "#1976d2", // Customize button color
              "&:hover": {
                backgroundColor: "#1565c0", // Darker shade on hover
              },
            }}
          >
            Add Product
          </Button>
        </Box>
      </Box>
    ),
  });

  return (
    <MaterialReactTable
      table={table}
      renderTopToolbarCustomActions={() => (
        <Box sx={{ padding: "16px", textAlign: "left" }}>
          <Typography variant="h5" component="div">
            Customer Orders
          </Typography>
          <Typography variant="body2" color="textSecondary">
            View details of recent orders from customers.
          </Typography>
        </Box>
      )}
    />
  );
};

const DetailCard = ({ card }) => {
  const { title, currency, amount, orders, percentageChange, icon } = card;
  const isPositive = percentageChange >= 0;

  return (
    <Card sx={{ margin: 2, minWidth: 250 }}>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <MdCurrencyRupee /> {amount}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography sx={{ color: "text.secondary" }}>
              {orders} orders
            </Typography>
            <Typography
              sx={{
                color: "white",
                display: "flex",
                alignItems: "center",
                border: "2px solid black",
                backgroundColor: isPositive ? "green" : "red",
                borderRadius: "10px",
                padding: "2px 8px",
              }}
            >
              <IoIosAdd sx={{ mx: 0.5 }} /> {Math.abs(percentageChange)}{" "}
              <FiPercent sx={{ mx: 0.5 }} />
            </Typography>
          </Box>
        </Box>
        <Box sx={{ fontSize: 36, color: "primary.main" }}>{iconMap[icon]}</Box>
      </CardContent>
    </Card>
  );
};

const SelectStatus = [
  { title: "Scheduled" },
  { title: "Publish" },
  { title: "Inactive" },
  { title: "Pulp Fiction" },
];

const Category = [{ name: "A" }, { name: "B" }, { name: "C" }, { name: "D" }];

const Stock = [{ genre: "Out Of Stock" }, { genre: "In Stock" }];

const FilterAutocomplete = ({ label, options, getOptionLabel }) => (
  <Autocomplete
    multiple
    options={options}
    getOptionLabel={getOptionLabel}
    filterSelectedOptions
    renderInput={(params) => (
      <TextField {...params} label={label} placeholder={label} size="small" />
    )}
  />
);

const FilterSection = () => {
  return (
    <Box sx={{ padding: 2, width: "35rem" }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Filter
      </Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <FilterAutocomplete
              label="Select Status"
              options={SelectStatus}
              getOptionLabel={(option) => option.title}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FilterAutocomplete
              label="Category"
              options={Category}
              getOptionLabel={(option) => option.name}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FilterAutocomplete
              label="Stock"
              options={Stock}
              getOptionLabel={(option) => option.genre}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
const ProductList = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        {cardData.map((card) => (
          <DetailCard key={card.id} card={card} />
        ))}
      </Box>
      <Box>
        <ListOfProduct />
      </Box>
    </>
  );
};

export default ProductList;
