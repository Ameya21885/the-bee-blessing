"use client";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  MRT_EditActionButtons,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo, useState } from "react";

export const fakeData = [
  {
    id: "9s41rp",
    firstName: "Kelvin",
    lastName: "Langosh",
    email: "Jerod14@hotmail.com",
    state: "Ohio",
    category: {
      image:
        "https://i.pinimg.com/736x/d7/9f/71/d79f71236b37653f16f1dcd49dbf448e.jpg",
      name: "Electronics",
      description: "Gadgets and devices",
    },
    totalProducts: 25,
    totalEarnings: 12000,
  },
  {
    id: "08m6rx",
    firstName: "Molly",
    lastName: "Purdy",
    email: "Hugh.Dach79@hotmail.com",
    state: "Rhode Island",
    category: {
      image:
        "https://i.pinimg.com/736x/d7/9f/71/d79f71236b37653f16f1dcd49dbf448e.jpg",
      name: "Electronics",
      description: "Gadgets and devices",
    },
    totalProducts: 25,
    totalEarnings: 12000,
  },
  {
    id: "5ymtrc",
    firstName: "Henry",
    lastName: "Lynch",
    email: "Camden.Macejkovic@yahoo.com",
    state: "California",
    category: {
      image:
        "https://i.pinimg.com/736x/d7/9f/71/d79f71236b37653f16f1dcd49dbf448e.jpg",
      name: "Electronics",
      description: "Gadgets and devices",
    },
    totalProducts: 25,
    totalEarnings: 12000,
  },
  {
    id: "ek5b97",
    firstName: "Glenda",
    lastName: "Douglas",
    email: "Eric0@yahoo.com",
    state: "Montana",
    category: {
      image:
        "https://i.pinimg.com/736x/d7/9f/71/d79f71236b37653f16f1dcd49dbf448e.jpg",
      name: "Electronics",
      description: "Gadgets and devices",
    },
    totalProducts: 25,
    totalEarnings: 12000,
  },
  {
    id: "xxtydd",
    firstName: "Leone",
    lastName: "Williamson",
    email: "Ericka_Mueller52@yahoo.com",
    state: "Colorado",
    category: {
      image:
        "https://i.pinimg.com/736x/d7/9f/71/d79f71236b37653f16f1dcd49dbf448e.jpg",
      name: "Electronics",
      description: "Gadgets and devices",
    },
    totalProducts: 25,
    totalEarnings: 12000,
  },
  {
    id: "wzxj9m",
    firstName: "Mckenna",
    lastName: "Friesen",
    email: "Veda_Feeney@yahoo.com",
    state: "New York",
    category: {
      image:
        "https://i.pinimg.com/736x/d7/9f/71/d79f71236b37653f16f1dcd49dbf448e.jpg",
      name: "Electronics",
      description: "Gadgets and devices",
    },
    totalProducts: 25,
    totalEarnings: 12000,
  },
  {
    id: "21dwtz",
    firstName: "Wyman",
    lastName: "Jast",
    email: "Melvin.Pacocha@yahoo.com",
    state: "Montana",
    category: {
      image:
        "https://i.pinimg.com/736x/d7/9f/71/d79f71236b37653f16f1dcd49dbf448e.jpg",
      name: "Electronics",
      description: "Gadgets and devices",
    },
    totalProducts: 25,
    totalEarnings: 12000,
  },
  {
    id: "o8oe4k",
    firstName: "Janick",
    lastName: "Willms",
    email: "Delfina12@gmail.com",
    state: "Nebraska",
    category: {
      image:
        "https://i.pinimg.com/736x/d7/9f/71/d79f71236b37653f16f1dcd49dbf448e.jpg",
      name: "Electronics",
      description: "Gadgets and devices",
    },
    totalProducts: 25,
    totalEarnings: 12000,
  },
];

export const usStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
  "Puerto Rico",
];

const Example = () => {
  const [validationErrors, setValidationErrors] = useState({});

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        enableEditing: false,
        size: 80,
      },
      {
        accessorKey: "category",
        header: "Category",
        size: 250,
        Cell: ({ row }) => {
          const { image, name, description } = row.original.category || {};
          return (
            <Box display="flex" alignItems="center" gap="1rem">
              <img
                src={image}
                alt={name}
                style={{ width: 50, height: 50, borderRadius: "50%" }}
              />
              <Box>
                <strong>{name}</strong>
                <br />
                <small>{description}</small>
              </Box>
            </Box>
          );
        },
      },
      {
        accessorKey: "totalProducts",
        header: "Total Products",
        size: 150,
        muiEditTextFieldProps: {
          type: "number",
          required: true,
          error: !!validationErrors?.totalProducts,
          helperText: validationErrors?.totalProducts,
        },
      },
      {
        accessorKey: "totalEarnings",
        header: "Total Earnings",
        size: 150,
        muiEditTextFieldProps: {
          type: "number",
          required: true,
          error: !!validationErrors?.totalEarnings,
          helperText: validationErrors?.totalEarnings,
        },
      },
    ],
    [validationErrors]
  );

  //call CREATE hook
  const {
    mutateAsync: createUser,
    isPending: isCreatingUser,
  } = useCreateUser();
  //call READ hook
  const {
    data: fetchedUsers = [],
    isError: isLoadingUsersError,
    isFetching: isFetchingUsers,
    isLoading: isLoadingUsers,
  } = useGetUsers();
  //call UPDATE hook
  const {
    mutateAsync: updateUser,
    isPending: isUpdatingUser,
  } = useUpdateUser();
  //call DELETE hook
  const {
    mutateAsync: deleteUser,
    isPending: isDeletingUser,
  } = useDeleteUser();

  //CREATE action
  const handleCreateUser = async ({ values, table }) => {
    const newValidationErrors = validateUser(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await createUser(values);
    table.setCreatingRow(null); //exit creating mode
  };

  //UPDATE action
  const handleSaveUser = async ({ values, table }) => {
    const newValidationErrors = validateUser(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await updateUser(values);
    table.setEditingRow(null); //exit editing mode
  };

  //DELETE action
  const openDeleteConfirmModal = (row) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(row.original.id);
    }
  };

  const table = useMaterialReactTable({
    columns,
    data: fetchedUsers,
    createDisplayMode: "modal", //default ('row', and 'custom' are also available)
    editDisplayMode: "modal", //default ('row', 'cell', 'table', and 'custom' are also available)
    enableEditing: true,
    getRowId: (row) => row.id,
    muiToolbarAlertBannerProps: isLoadingUsersError
      ? {
          color: "error",
          children: "Error loading data",
        }
      : undefined,
    muiTableContainerProps: {
      sx: {
        minHeight: "500px",
      },
    },
    onCreatingRowCancel: () => setValidationErrors({}),
    onCreatingRowSave: handleCreateUser,
    onEditingRowCancel: () => setValidationErrors({}),
    onEditingRowSave: handleSaveUser,
    //optionally customize modal content
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Create New User</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {internalEditComponents} {/* or render custom edit components here */}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    //optionally customize modal content
    renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Edit User</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {internalEditComponents}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => table.setEditingRow(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        variant="contained"
        onClick={() => {
          table.setCreatingRow(true); //simplest way to open the create row modal with no default values
          //or you can pass in a row object to set default values with the `createRow` helper function
          // table.setCreatingRow(
          //   createRow(table, {
          //     //optionally pass in default values for the new row, useful for nested data or other complex scenarios
          //   }),
          // );
        }}
      >
        Create New User
      </Button>
    ),
    state: {
      isLoading: isLoadingUsers,
      isSaving: isCreatingUser || isUpdatingUser || isDeletingUser,
      showAlertBanner: isLoadingUsersError,
      showProgressBars: isFetchingUsers,
    },
  });

  return <MaterialReactTable table={table} />;
};

//CREATE hook (post new user to api)
function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newUserInfo) => {
      queryClient.setQueryData(["users"], (prevUsers) => [
        ...prevUsers,
        {
          ...newUserInfo,
          id: (Math.random() + 1).toString(36).substring(7),
        },
      ]);
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

//READ hook (get users from api)
function useGetUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      //send api request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve(fakeData);
    },
    refetchOnWindowFocus: false,
  });
}

//UPDATE hook (put user in api)
function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newUserInfo) => {
      queryClient.setQueryData(["users"], (prevUsers) =>
        prevUsers?.map((prevUser) =>
          prevUser.id === newUserInfo.id ? newUserInfo : prevUser
        )
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

//DELETE hook (delete user in api)
function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (userId) => {
      queryClient.setQueryData(["users"], (prevUsers) =>
        prevUsers?.filter((user) => user.id !== userId)
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

const queryClient = new QueryClient();

const CategoryList = () => (
  //Put this with your other react-query providers near root of your app
  <QueryClientProvider client={queryClient}>
    <Example />
  </QueryClientProvider>
);

export default CategoryList;

const validateRequired = (value) => !!value.length;
const validateNumber = (value) => !isNaN(value) && value >= 0;
// const validateEmail = (email) =>
//   !!email.length &&
//   email
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );

function validateUser(user) {
  return {
    category: !user.category?.name ? "Category name is required" : "",
    totalProducts: !validateNumber(user.totalProducts)
      ? "Total Products must be a positive number"
      : "",
    totalEarnings: !validateNumber(user.totalEarnings)
      ? "Total Earnings must be a positive number"
      : "",
  };
}
