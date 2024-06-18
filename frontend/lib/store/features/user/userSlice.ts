import { getToken } from "@/data/services/get-token";
import { getAssetURL } from "@/lib/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCurrentUser = createAsyncThunk("user", async () => {
  const authToken = await getToken();

  if (!authToken) return { ok: false, data: null, error: null };

  try {
    const baseUrl = getAssetURL();
    const url = new URL("/api/users/me", baseUrl);

    const response = await fetch(url.href, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      cache: "no-cache",
    });

    const data = await response.json();

    if (data.error) return { ok: false, data: null, error: data.error };

    return { ok: true, data: data, error: null };
  } catch (error) {
    console.log(error);

    return { ok: false, data: null, error: error };
  }
});

export const userSlice = createSlice({
  name: "USER",
  initialState: {
    isLoading: false,
    user: null,
  },
  reducers: {
    // setUser: (state, action) => {
    //   state.data = { ...state.data, ...action.payload };
    // },
    // getUser: (state) => state,
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
      state.user = payload.data;
      state.isLoading = false;
    });
  },
});

// export const { setUser, getUser } = userSlice.actions;

export default userSlice.reducer;
