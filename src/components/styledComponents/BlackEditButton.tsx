import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
export default function BlackEditButton({ onClick }: { onClick: () => void }) {
  return (
    <IconButton onClick={onClick}>
      <EditIcon color="error" fontSize="small" sx={{ fontSize: 16 }} />
    </IconButton>
  );
}
