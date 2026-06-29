alter table public.pedidos
  add column if not exists forma_pago text
    check (forma_pago in ('CONTADO', 'CREDITO')),
  add column if not exists fecha_entrega date;

update public.pedidos
set forma_pago = 'CREDITO'
where forma_pago is null;

alter table public.pedidos
  alter column forma_pago set default 'CREDITO';
