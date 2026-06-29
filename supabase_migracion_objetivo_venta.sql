alter table public.proveedores
  add column if not exists objetivo_venta numeric default 0;
