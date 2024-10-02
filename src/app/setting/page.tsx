'use client';

import * as React from 'react';
import { Fragment } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import Card from '@mui/material/Card';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

import EmptyState from '@/components/emptyState';
import { IconFA } from '@/components/icons/icon-fa';
import DashboardLayout from '@/components/layouts/layout';

import DashboardBlock from '../dashboard/partials/block';
import TableSetting from './partials/table';

const FieldItem = ({ label, children }: { label: React.ReactNode; children: React.ReactNode }) => {
  return (
    <Stack spacing={0.7}>
      <Typography color={grey[700]} fontSize={14}>
        {label}
      </Typography>
      {children}
    </Stack>
  );
};

export default function PageSetting(): React.JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');
  const [itemExclude, setItemExclude] = React.useState([{ id: 0 }]);
  const [itemTopic, setItemTopic] = React.useState([{ id: 0 }]);

  const addTopic = () => {
    let arr = [...itemTopic];
    if (arr.length >= 10) {
      return;
    } else {
      arr.push({ id: Math.floor(Math.random() * 1000) });
    }
    const newItem = arr;
    setItemTopic(newItem);
  };

  const minusTopic = (nowId: any) => {
    let arr = [...itemTopic];
    let newArr = arr.filter((val) => {
      if (nowId === val.id) {
        return false;
      } else {
        return true;
      }
    });
    setItemTopic(newArr);
  };

  const addExclude = () => {
    let arr = [...itemExclude];
    if (arr.length >= 10) {
      return;
    } else {
      arr.push({ id: Math.floor(Math.random() * 1000) });
    }
    const newItem = arr;
    setItemExclude(newItem);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const emptyData = false;

  return (
    <>
      <DashboardLayout title="Setting">
        {emptyData ? (
          <EmptyState />
        ) : (
          <DashboardBlock
            title="Setting"
            action={
              <Button
                color="primary"
                variant="contained"
                startIcon={<IconFA name="plus" size={14} />}
                onClick={handleClickOpen}
              >
                Add New Product
              </Button>
            }
          >
            <Card>
              <TableSetting />
            </Card>
          </DashboardBlock>
        )}
      </DashboardLayout>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
        sx={{
          '.MuiPaper-root': {
            minWidth: 800,
          },
        }}
      >
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent sx={{ p: '16px 24px', pb: 0 }}>
          <Stack spacing={2}>
            <Typography fontWeight={600}>Product Detail</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FieldItem label="Brand/Product Name">
                  <TextField
                    size="small"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    placeholder="Brand/Product Name"
                    helperText="Maximum 32 characters allowed"
                  />
                </FieldItem>
              </Grid>
              {/* <Grid item md={6} xs={12}>
                <FieldItem label="Product Logo">
                  <FormControl fullWidth variant="outlined">
                    <Button
                      component="label"
                      role={undefined}
                      variant="outlined"
                      tabIndex={-1}
                      startIcon={<IconFA name="upload" size={14} />}
                    >
                      Upload files
                      <VisuallyHiddenInput
                        type="file"
                        onChange={(event: any) => console.log(event.target.files)}
                        multiple
                      />
                    </Button>
                    <FormHelperText>Maximum file size: 2 MB. Only image files are allowed.</FormHelperText>
                  </FormControl>
                </FieldItem>
              </Grid> */}
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item md={6} xs={12}>
                <FieldItem label="Data Start Date">
                  <FormControl fullWidth>
                    <Select size="small" displayEmpty value={age} onChange={handleChange} placeholder="Pilih tipe">
                      <MenuItem value="" disabled>
                        Data start date
                      </MenuItem>
                      <MenuItem value="today">Today</MenuItem>
                      <MenuItem value="yesterday">Yesterday</MenuItem>
                      <MenuItem value="7">Last 7 days</MenuItem>
                      <MenuItem value="30">Last 30 days</MenuItem>
                    </Select>
                  </FormControl>
                </FieldItem>
              </Grid>
              <Grid item md={6} xs={12}>
                <FieldItem label="Monitoring Type">
                  <FormControl fullWidth>
                    <Select size="small" displayEmpty value={age} onChange={handleChange} placeholder="Pilih tipe">
                      <MenuItem value="" disabled>
                        Monitoring type
                      </MenuItem>
                      <MenuItem value="one">One Time</MenuItem>
                      <MenuItem value="daily">Daily</MenuItem>
                    </Select>
                  </FormControl>
                </FieldItem>
              </Grid>
            </Grid>
          </Stack>
          <Divider sx={{ my: 2 }} />
          <Stack spacing={2}>
            <Stack spacing={2} direction="row" justifyContent="space-between" alignItems="center">
              <Typography>News Media Monitoring</Typography>
              <Stack spacing={2} direction="row" alignItems="center">
                <Button size="small" color="primary">
                  Source (0 Selected)
                </Button>
                <Box bgcolor={grey[200]} borderRadius={2}>
                  <Switch />
                </Box>
              </Stack>
            </Stack>
            <Grid container spacing={2}>
              {itemExclude.map((tags: any) => (
                <Grid key={`${tags.id}`} item xs={12}>
                  <FieldItem label="News Media Include Product Keywords">
                    <TextField
                      size="small"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      placeholder="Type news media include product keywords, and press enter"
                    />
                  </FieldItem>
                </Grid>
              ))}
              <Grid item xs={12}>
                <Stack direction="row" justifyContent="flex-end">
                  <Box>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      startIcon={<IconFA name="plus" size={14} />}
                      onClick={addExclude}
                    >
                      Add Exclude Keyword
                    </Button>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
          <Divider sx={{ my: 2 }} />
          <Stack spacing={2}>
            <Stack spacing={2} direction="row" justifyContent="space-between" alignItems="center">
              <Typography>Social Media Monitoring</Typography>
              <Stack spacing={2} direction="row" alignItems="center">
                <Button size="small" color="primary">
                  Source (0 Selected)
                </Button>
                <Box bgcolor={grey[200]} borderRadius={2}>
                  <Switch />
                </Box>
              </Stack>
            </Stack>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FieldItem label="Social media Product Keywords">
                  <TextField
                    size="small"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    placeholder="Type social media product keywords, and press enter"
                  />
                </FieldItem>
              </Grid>
            </Grid>
          </Stack>
          <Divider sx={{ my: 2 }} />
          <Stack spacing={2}>
            <Typography fontWeight={600}>Topic</Typography>
            <Grid container spacing={2}>
              {itemTopic.map((tags: any) => (
                <Fragment key={`${tags.id}`}>
                  <Grid item md={4} xs={12}>
                    <FieldItem label="Topic Name">
                      <TextField
                        size="small"
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        placeholder="Type topic name"
                      />
                    </FieldItem>
                  </Grid>
                  <Grid item md={7} xs={11}>
                    <FieldItem label="Topic Keywords">
                      <TextField
                        size="small"
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        placeholder="Type topic keywords, and press enter"
                      />
                    </FieldItem>
                  </Grid>
                  <Grid item md={1} xs={1}>
                    <Stack mt="25px" width={40} height={40} alignItems="center" justifyContent="center">
                      <IconButton color="error" onClick={() => minusTopic(tags.id)}>
                        <IconFA name="trash" size={14} />
                      </IconButton>
                    </Stack>
                  </Grid>
                </Fragment>
              ))}
              <Grid item xs={12}>
                <Stack direction="row" justifyContent="flex-end">
                  <Box>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      startIcon={<IconFA name="plus" size={14} />}
                      onClick={addTopic}
                    >
                      Add New Topic
                    </Button>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
          <Divider sx={{ mt: 2 }} />
        </DialogContent>
        <DialogActions sx={{ p: 2, px: 3 }}>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Add Product
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
