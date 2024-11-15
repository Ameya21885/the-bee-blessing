"use client";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
  Switch,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaCarAlt, FaFileUpload, FaUnlockAlt } from "react-icons/fa";
import { IoIosAdd, IoIosTrash } from "react-icons/io";
import { RiLinkM } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const toolbarOptions = [
  [{ header: "1" }, { header: "2" }, { font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline", "strike"],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
  ["link", "image"],
  ["clean"], // Clears formatting
  [{ "tx-symbol": "Tx" }], // Custom "Tx" symbol button
];

// Define custom module to insert "Tx" symbol
const modules = {
  toolbar: {
    container: toolbarOptions,
    handlers: {
      "tx-symbol": function() {
        const cursorPosition = this.quill.getSelection().index;
        this.quill.insertText(cursorPosition, "Tx");
        this.quill.setSelection(cursorPosition + 2);
      },
    },
  },
};

const Heading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        // padding: 2, // Added padding for spacing
        alignItems: "center", // Aligns content vertically
      }}
    >
      <Box>
        <Typography variant="h5" component="div">
          Add a new Product
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          Orders placed across your store
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 1 }}>
        {/* Gap added between buttons */}
        <Button variant="outlined" color="gray">
          Discard
        </Button>
        <Button variant="outlined">Save Draft</Button>
        <Button variant="contained">Publish Product</Button>
      </Box>
    </Box>
  );
};

const ProductInformation = () => {
  const [description, setDescription] = useState("");

  return (
    <Card sx={{ padding: 2 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" sx={{ mb: 2 }}>
          Product Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Name" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Amount"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Barcode"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Description (Optional)
            </Typography>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={setDescription}
              modules={modules}
              style={{
                minHeight: "200px",
                marginBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

const ProductImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle file drop
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFile(file);
  };

  // Handle file selection via "Browse Image"
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    handleFile(file);
  };

  // Set image preview
  const handleFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setSelectedImage(reader.result);
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file");
    }
  };

  // Handle image removal
  const handleRemoveImage = () => {
    setSelectedImage(null); // Reset the image
  };

  return (
    <Card sx={{ padding: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div" sx={{ mb: 2 }}>
          Product Image
        </Typography>
        <Button variant="text">Add media from URL</Button>
      </Box>

      <Box
        sx={{
          border: "2px dashed gray",
          borderRadius: "10px",
          padding: "3rem 1rem 3rem 1rem",
          textAlign: "center",
          cursor: "pointer",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          // height: "200px",
          width: "100%",
        }}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {selectedImage ? (
          <>
            <img
              src={selectedImage}
              alt="Selected"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain", // Ensures image fits within the box
              }}
            />
            <Button
              variant="outlined"
              color="error"
              sx={{ mt: 2 }}
              onClick={handleRemoveImage}
            >
              Remove Image
            </Button>
          </>
        ) : (
          <>
            <FaFileUpload size={40} />
            <Typography variant="h4" component="div" sx={{ mb: 2 }}>
              Drag and drop your image here
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              or
            </Typography>
            <Button variant="outlined" component="label">
              Browse Image
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleFileSelect}
              />
            </Button>
          </>
        )}
      </Box>
    </Card>
  );
};

const VariantsOptions = [
  { label: "Size" },
  { label: "Color" },
  { label: "Weight" },
  { label: "Smell" },
];

const ProductVariants = () => {
  const [variants, setVariants] = useState([{ option: "", value: "" }]);

  // Handle adding a new variant row
  const addVariant = () => {
    setVariants([...variants, { option: "", value: "" }]);
  };

  // Handle removing a variant
  const removeVariant = (index) => {
    const updatedVariants = variants.filter((_, i) => i !== index);
    setVariants(updatedVariants);
  };

  // Handle changes in variant options
  const handleOptionChange = (index, newOption) => {
    const updatedVariants = [...variants];
    updatedVariants[index].option = newOption;
    setVariants(updatedVariants);
  };

  // Handle changes in variant values
  const handleValueChange = (index, newValue) => {
    const updatedVariants = [...variants];
    updatedVariants[index].value = newValue;
    setVariants(updatedVariants);
  };

  return (
    <Box>
      <Card sx={{ padding: 2 }}>
        <Typography variant="h6" component="div" sx={{ mb: 2 }}>
          Variants
        </Typography>

        {variants.map((variant, index) => (
          <Box
            key={index}
            sx={{ display: "flex", gap: 2, mb: 2, alignItems: "center" }}
          >
            <Autocomplete
              disablePortal
              options={VariantsOptions}
              value={{ label: variant.option }}
              onChange={(event, newValue) =>
                handleOptionChange(index, newValue?.label || "")
              }
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Options"
                  size="small"
                  fullWidth
                  required
                />
              )}
            />
            <TextField
              label="Value"
              variant="outlined"
              size="small"
              fullWidth
              value={variant.value}
              onChange={(e) => handleValueChange(index, e.target.value)}
              required
            />
            {variants.length > 1 && (
              <Box
                sx={{
                  display: "inline-block",
                  cursor: "pointer",
                  marginLeft: "10px",
                  transform: "scale(1.5)",
                }}
              >
                <IoIosTrash color="red" onClick={() => removeVariant(index)} />
              </Box>
            )}
          </Box>
        ))}

        <Button
          variant="contained"
          startIcon={<IoIosAdd />}
          onClick={addVariant}
        >
          Add Another Option
        </Button>
      </Card>
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const InventoryRestock = () => {
  return (
    <Box>
      <Typography variant="h6" component="div">
        Options
      </Typography>
      {/* <Typography variant="subtitle1" sx={{ color: "text.secondary", mb: 1.5 }}>
        Options
      </Typography> */}
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: 2, mt: 2 }}
      >
        <TextField
          label="Add to Stock"
          variant="outlined"
          size="small"
          sx={{ flexGrow: 1, mr: 2 }}
        />
        <Button variant="contained" startIcon={<TiTick />} size="small">
          Confirm
        </Button>
      </Box>
      <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
        Product in stock now: 54
      </Typography>
      <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
        Product in transit: 390
      </Typography>
      <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
        Last time restocked: 24th June, 2023
      </Typography>
      <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
        Total stock over lifetime: 2430
      </Typography>
    </Box>
  );
};

const InventoryShipping = () => {
  return (
    <Box>
      <Typography variant="h6" component="div" sx={{ mb: 2 }}>
        Shipping Type
      </Typography>
      <RadioGroup
        aria-labelledby="shipping-type-radio-buttons-group-label"
        name="shipping-type"
        defaultValue="fulfilledByCompany"
      >
        <Box sx={{ mb: 2 }}>
          <FormControlLabel
            value="fulfilledBySeller"
            control={<Radio />}
            label="Fulfilled by Seller"
          />
          <Box sx={{ pl: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{ color: "text.secondary", mb: 1 }}
            >
              You'll be responsible for product delivery.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "text.secondary", mb: 1 }}
            >
              Any damage or delay during shipping may cost you a Damage fee.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: "flex" }}>
            <FormControlLabel
              value="fulfilledByCompany"
              control={<Radio />}
              label="Fulfilled by Company Name"
            />
            <Typography
              sx={{
                border: "1px solid orange",
                borderRadius: "10px",
                width: "fit-content",
                color: "orange",
                padding: "4px 12px",
                fontSize: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#ffdecf",
              }}
            >
              Recommended
            </Typography>
          </Box>
          <Box sx={{ pl: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{ color: "text.secondary", mb: 1 }}
            >
              Your product, Our responsibility.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "text.secondary", mb: 1 }}
            >
              For a nominal fee, we will handle the delivery process for you.
            </Typography>
          </Box>
        </Box>
      </RadioGroup>
      <Typography variant="subtitle1" sx={{ color: "text.secondary", mt: 2 }}>
        {/* <Link href="/terms" color="primary" underline="hover"> */}
        See our Delivery terms and conditions for details
        {/* </Link> */}
      </Typography>
    </Box>
  );
};

const InventoryGlobalDelivery = () => {
  return (
    <Box>
      <Typography variant="h6" component="div" sx={{ mb: 2 }}>
        Global Delivery
      </Typography>
      <RadioGroup
        aria-labelledby="shipping-type-radio-buttons-group-label"
        name="Global-Delivery"
        defaultValue="localDelivery"
      >
        <Box sx={{ mb: 2 }}>
          <FormControlLabel
            value="worldWideDelivery"
            control={<Radio />}
            label="Fulfilled by Seller"
          />
          <Box sx={{ pl: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{ color: "text.secondary", mb: 1 }}
            >
              Only available with Shipping method: Fulfilled by Company name
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 2 }}>
          <FormControlLabel
            value="SelectedCountries"
            control={<Radio />}
            label="Selected Countries"
          />
          <TextField fullWidth label="Countries" size="small" />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: "flex" }}>
            <FormControlLabel
              value="localDelivery"
              control={<Radio />}
              label="Local delivery"
            />
            <Typography
              sx={{
                border: "1px solid orange",
                borderRadius: "10px",
                width: "fit-content",
                color: "orange",
                padding: "4px 12px",
                fontSize: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#ffdecf",
              }}
            >
              Recommended
            </Typography>
          </Box>
          <Box sx={{ pl: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{ color: "text.secondary", mb: 1 }}
            >
              Deliver to your country of residence : Change profile address
            </Typography>
          </Box>
        </Box>
      </RadioGroup>
      <Typography variant="subtitle1" sx={{ color: "text.secondary", mt: 2 }}>
        {/* <Link href="/terms" color="primary" underline="hover"> */}
        See our Delivery terms and conditions for details
        {/* </Link> */}
      </Typography>
    </Box>
  );
};

const attributes = [
  { label: "Fragile Product", hasInput: false },
  { label: "Biodegradable", hasInput: false },
  {
    label: "Frozen Product",
    hasInput: true,
    inputLabel: "Max. allowed Temperature",
  },
  { label: "Expiry Date of Product", hasInput: true, inputLabel: "Date" },
];

const InventoryAttributes = () => {
  const [checkedState, setCheckedState] = useState(
    attributes.reduce((acc, { label }) => {
      acc[label] = false; // Initial state for each checkbox is `false`
      return acc;
    }, {})
  );

  const handleCheckboxChange = (label) => {
    setCheckedState((prev) => ({
      ...prev,
      [label]: !prev[label], // Toggle the state for the specific checkbox
    }));
  };

  return (
    <Box>
      <Typography variant="h6" component="div" sx={{ mb: 2 }}>
        Attributes
      </Typography>
      <FormGroup>
        {attributes.map(({ label, hasInput, inputLabel }) => (
          <Box key={label} sx={{ mb: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedState[label]}
                  onChange={() => handleCheckboxChange(label)}
                />
              }
              label={label}
              sx={{ mb: hasInput ? 1 : 0 }}
            />
            {hasInput && (
              <TextField
                fullWidth
                label={inputLabel}
                size="small"
                disabled={!checkedState[label]} // Enable TextField only if checkbox is checked
              />
            )}
          </Box>
        ))}
      </FormGroup>
    </Box>
  );
};

const productIDTypeOptions = [
  { label: "ISBN", year: 2023 },
  { label: "EAN", year: 2022 },
  { label: "ASIN", year: 2021 },
];

// Options for Product ID
const productIDOptions = [
  { label: "123-456-789" },
  { label: "987-654-321" },
  { label: "555-666-777" },
];

const InventoryAdvance = () => {
  const fields = [{ label: "Product ID Type" }, { label: "Product ID" }];

  return (
    <Box
    sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      gap: 2,
      // p: 2,
    }}
  >
    <Typography variant="h6" component="div" sx={{ mb: 2 }}>
      Advance
    </Typography>
    {/* Autocomplete for Product ID Type */}
    <Autocomplete
      disablePortal
      options={productIDTypeOptions}
      renderInput={(params) => <TextField {...params} label="Product ID Type" fullWidth />}
      sx={{ width: "100%" }}
    />

    {/* Autocomplete for Product ID */}
    <Autocomplete
      disablePortal
      options={productIDOptions}
      renderInput={(params) => <TextField {...params} label="Product ID" fullWidth />}
      sx={{ width: "100%" }}
    />
  </Box>
  );
};

const ProductInventoryTabs = () => {
  const [value, setValue] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!isMounted) return null;
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        // height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="standard"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          sx={{
            flexDirection: "row",
            justifyContent: "flex-start",
            minHeight: "40px",
          }}
          icon={<IoIosAdd sx={{ fontSize: "30px" }} />}
          iconPosition="start"
          label="Restock"
          {...a11yProps(0)}
        />
        <Tab
          sx={{
            flexDirection: "row",
            justifyContent: "flex-start",
            minHeight: "40px",
          }}
          icon={<FaCarAlt sx={{ fontSize: "30px" }} />}
          iconPosition="start"
          label="Shipping"
          {...a11yProps(1)}
        />
        <Tab
          sx={{
            flexDirection: "row",
            justifyContent: "flex-start",
            minHeight: "40px",
          }}
          icon={<AiOutlineGlobal sx={{ fontSize: "30px" }} />}
          iconPosition="start"
          label="Global Delivery"
          {...a11yProps(2)}
        />
        <Tab
          sx={{
            flexDirection: "row",
            justifyContent: "flex-start",
            minHeight: "40px",
          }}
          icon={<RiLinkM sx={{ fontSize: "30px" }} />}
          iconPosition="start"
          label="Attributes"
          {...a11yProps(3)}
        />
        <Tab
          sx={{
            flexDirection: "row",
            justifyContent: "flex-start",
            minHeight: "40px",
          }}
          icon={<FaUnlockAlt sx={{ fontSize: "30px" }} />}
          iconPosition="start"
          label="Advanced"
          {...a11yProps(4)}
        />
        {/* <Tab sx={{ flexDirection: 'row', justifyContent: 'flex-start' }} icon={<IoMdHome />} iconPosition="start"  label="Item Six" {...a11yProps(5)} /> */}
        {/* <Tab sx={{ flexDirection: 'row', justifyContent: 'flex-start' }} icon={<IoMdHome />} iconPosition="start"  label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <InventoryRestock />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InventoryShipping />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <InventoryGlobalDelivery />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <InventoryAttributes />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <InventoryAdvance />
      </TabPanel>
      {/* <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </Box>
  );
};

const ProductInventory = () => {
  return (
    <Card sx={{ padding: 2 }}>
      <Typography variant="h6" component="div" sx={{ mb: 2 }}>
        Inventory
      </Typography>
      <ProductInventoryTabs />
    </Card>
  );
};

const PricingSection = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <TextField fullWidth label="Best Price" size="small" sx={{ mb: 2 }} />
      <TextField
        fullWidth
        label="Discounted Price"
        size="small"
        sx={{ mb: 2 }}
      />
      <FormControlLabel
        control={
          <Checkbox checked={checked} onChange={handleChange} size="small" />
        }
        label="Charge tax on this product"
        sx={{ mb: 2 }}
      />
      <hr style={{ margin: "16px 0" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "text.secondary" }}>In stock</Typography>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
          size="small"
        />
      </Box>
    </Box>
  );
};

const ProductPricing = () => {
  return (
    <Card sx={{ padding: 2 }}>
      <Typography variant="h6" component="div" sx={{ mb: 2 }}>
        Pricing
      </Typography>
      <PricingSection />
    </Card>
  );
};

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
];

const OrganizeSection = () => {
  return (
    <Box>
      <Autocomplete
        disablePortal
        options={top100Films}
        sx={{ width: 300, mb: 2 }}
        renderInput={(params) => (
          <TextField {...params} label="Select Vendor" size="small" />
        )}
      />
      <Autocomplete
        disablePortal
        options={top100Films}
        sx={{ width: 300, mb: 2 }}
        renderInput={(params) => (
          <TextField {...params} label="Select Category" size="small" />
        )}
      />
      <Autocomplete
        disablePortal
        options={top100Films}
        sx={{ width: 300, mb: 2 }}
        renderInput={(params) => (
          <TextField {...params} label="Collection" size="small" />
        )}
      />
      <Autocomplete
        disablePortal
        options={top100Films}
        sx={{ width: 300, mb: 2 }}
        renderInput={(params) => (
          <TextField {...params} label="Select Status" size="small" />
        )}
      />
      <Autocomplete
        multiple
        options={top100Films}
        getOptionLabel={(option) => option.label}
        filterSelectedOptions
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Tags" size="small" />
        )}
      />
    </Box>
  );
};

const ProductOrganize = () => {
  return (
    <Card sx={{ padding: 2 }}>
      <Typography variant="h6" component="div" sx={{ mb: 2 }}>
        Organize
      </Typography>
      <OrganizeSection />
    </Card>
  );
};

const AddProduct = () => {
  return (
    <>
      <Heading />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <ProductInformation />
          <ProductImage />
          <ProductVariants />
          <ProductInventory />
        </Box>
        <Box
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <ProductPricing />
          <ProductOrganize />
        </Box>
      </Box>
    </>
  );
};

export default AddProduct;
