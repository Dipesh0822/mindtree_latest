// ** MUI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";

interface TableHeaderProps {
  value: string;
  toggle: () => void;
  handleFilter: (val: string) => void;
  allowGoBack?: boolean;
}

const TableHeader = (props: TableHeaderProps) => {
  const router = useRouter();
  // ** Props
  const { handleFilter, toggle, value, allowGoBack } = props;

  return (
    <Box
      sx={{
        p: 5,
        pb: 3,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {allowGoBack ? (
        <Button
          onClick={() => {
            router.back();
          }}
        >
          Go Back
        </Button>
      ) : null}
      <Box />
      <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
        <TextField
          size="small"
          value={value}
          sx={{ mr: 4, mb: 2 }}
          placeholder="Search"
          onChange={(e) => handleFilter(e.target.value)}
        />

        {/* <Button sx={{ mb: 2 }} onClick={toggle} variant="contained">
          Add Meditation
        </Button> */}
      </Box>
    </Box>
  );
};

export default TableHeader;
